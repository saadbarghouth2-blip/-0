const mojibakePattern = /(?:Ø|Ù|Ã|Â|â€|â€™|â€œ|â€‌|â€“|â€”|â€¦)/;

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

const decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { fatal: false }) : undefined;

const countMojibakeMarks = (value: string) => (value.match(mojibakePattern) ?? []).length;

export const repairMojibake = (value: string) => {
  if (!value || !decoder || !mojibakePattern.test(value)) {
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

export const localizedText = (value: { ar: string; en: string }, lang: 'ar' | 'en') => repairMojibake(value[lang]);
