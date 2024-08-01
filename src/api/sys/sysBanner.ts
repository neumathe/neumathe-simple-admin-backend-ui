import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseUUIDsReq, BaseUUIDReq } from '@/api/model/baseModel';
import { SysBannerInfo, SysBannerListResp } from './model/sysBannerModel';

enum Api {
  CreateSysBanner = '/sys-api/sys_banner/create',
  UpdateSysBanner = '/sys-api/sys_banner/update',
  GetSysBannerList = '/sys-api/sys_banner/list',
  DeleteSysBanner = '/sys-api/sys_banner/delete',
  GetSysBannerById = '/sys-api/sys_banner',
}

/**
 * @description: Get sys banner list
 */

export const getSysBannerList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<SysBannerListResp>>(
    { url: Api.GetSysBannerList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new sys banner
 */
export const createSysBanner = (params: SysBannerInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateSysBanner, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the sys banner
 */
export const updateSysBanner = (params: SysBannerInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateSysBanner, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete sys banners
 */
export const deleteSysBanner = (params: BaseUUIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteSysBanner, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get sys banner By ID
 */
export const getSysBannerById = (params: BaseUUIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<SysBannerInfo>>(
    { url: Api.GetSysBannerById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
