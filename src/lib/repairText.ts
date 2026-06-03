const mojibakePattern =
  /(?:\u00d8|\u00d9|\u00c3|\u00c2|\u00e2|\u20ac|\u201a|\u0192|\u201e|\u2026|\u2020|\u2021|\u02c6|\u2030|\u0160|\u2039|\u0152|\u017d|\u2018|\u2019|\u201c|\u201d|\u2022|\u2013|\u2014|\u02dc|\u2122|\u0161|\u203a|\u0153|\u017e|\u0178)/;

const latinishRunPattern =
  /[\u0000-\u00ff\u0100-\u017f\u0192\u02c6\u02dc\u2018-\u201e\u2020-\u2026\u2030\u2039\u203a\u20ac\u2122]+/g;

const windows1252Overrides: Record<number, number> = {
  0x20ac: 0x80,
  0x201a: 0x82,
  0x0192: 0x83,
  0x201e: 0x84,
  0x2026: 0x85,
  0x2020: 0x86,
  0x2021: 0x87,
  0x02c6: 0x88,
  0x2030: 0x89,
  0x0160: 0x8a,
  0x2039: 0x8b,
  0x0152: 0x8c,
  0x017d: 0x8e,
  0x2018: 0x91,
  0x2019: 0x92,
  0x201c: 0x93,
  0x201d: 0x94,
  0x2022: 0x95,
  0x2013: 0x96,
  0x2014: 0x97,
  0x02dc: 0x98,
  0x2122: 0x99,
  0x0161: 0x9a,
  0x203a: 0x9b,
  0x0153: 0x9c,
  0x017e: 0x9e,
  0x0178: 0x9f,
};

const decoder =
  typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { fatal: false }) : undefined;

const countMojibakeMarks = (value: string) => (value.match(mojibakePattern) ?? []).length;

const decodeWindows1252Utf8 = (value: string) => {
  if (!decoder || !mojibakePattern.test(value)) {
    return value;
  }

  const bytes: number[] = [];

  for (const character of value) {
    const codePoint = character.codePointAt(0) ?? 0;

    if (codePoint <= 0xff) {
      bytes.push(codePoint);
      continue;
    }

    const overrideByte = windows1252Overrides[codePoint];
    if (overrideByte !== undefined) {
      bytes.push(overrideByte);
      continue;
    }

    return value;
  }

  const decoded = decoder.decode(new Uint8Array(bytes));
  const improvedScore = countMojibakeMarks(decoded) < countMojibakeMarks(value);

  if (/[\u0600-\u06ff]/.test(decoded) || improvedScore) {
    return decoded;
  }

  return value;
};

export const repairMojibake = (value: string) => {
  if (!value || !decoder || !mojibakePattern.test(value)) {
    return value;
  }

  const decodedWhole = decodeWindows1252Utf8(value);

  if (decodedWhole !== value) {
    return decodedWhole;
  }

  return value.replace(latinishRunPattern, (segment) => decodeWindows1252Utf8(segment));
};

export const localizedText = (value: { ar: string; en: string }, lang: 'ar' | 'en') =>
  repairMojibake(value[lang]);
