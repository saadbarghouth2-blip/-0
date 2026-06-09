import { enrichmentMediaAssets, type EnrichmentMediaAsset } from './enrichmentMedia';
import { localImageList, type LocalImageAsset } from './localImageInventory';

export type SiteMediaKind = 'image' | 'video';

export interface SiteMediaRegistryItem {
  id: string;
  src: string;
  kind: SiteMediaKind;
  alt: {
    ar: string;
    en: string;
  };
  usage: string;
  source: 'local' | 'pexels' | 'unsplash';
}

const sourceFromLicense = (licenseName?: string): SiteMediaRegistryItem['source'] => {
  const normalized = licenseName?.toLowerCase() ?? '';
  if (normalized.includes('unsplash')) return 'unsplash';
  if (normalized.includes('pexels')) return 'pexels';
  return 'local';
};

const fromLocalImage = (asset: LocalImageAsset): SiteMediaRegistryItem => ({
  id: asset.id,
  src: asset.src,
  kind: 'image',
  alt: {
    ar: asset.altAr,
    en: asset.altEn,
  },
  usage: asset.usage,
  source: asset.src.startsWith('/media/enrichment/') ? 'pexels' : 'local',
});

const fromEnrichment = (asset: EnrichmentMediaAsset): SiteMediaRegistryItem => ({
  id: asset.id,
  src: asset.src,
  kind: asset.type,
  alt: asset.alt,
  usage: asset.usedForRoutes.join(', '),
  source: sourceFromLicense(asset.licenseName),
});

export const siteMediaRegistry: SiteMediaRegistryItem[] = [
  ...localImageList.map(fromLocalImage),
  ...enrichmentMediaAssets.map(fromEnrichment),
];

export const siteMediaBySrc = new Map(siteMediaRegistry.map((asset) => [asset.src, asset]));
