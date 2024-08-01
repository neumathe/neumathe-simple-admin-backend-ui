import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: SysBanner info response
 */
export interface SysBannerInfo {
  id?: string;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  showAt?: number;
  url?: string;
}

/**
 *  @description: SysBanner list response
 */

export type SysBannerListResp = BaseListResp<SysBannerInfo>;
