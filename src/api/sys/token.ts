import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {
  BaseDataResp,
  BaseListReq,
  BaseResp,
  BaseUUIDsReq,
  BaseUUIDReq,
} from '/@/api/model/baseModel';
import { TokenInfo, TokenListResp } from './model/tokenModel';

enum Api {
  CreateToken = '/sys-api/token/create',
  UpdateToken = '/sys-api/token/update',
  GetTokenList = '/sys-api/token/list',
  DeleteToken = '/sys-api/token/delete',
  GetTokenById = '/sys-api/token',
  Logout = '/sys-api/token/logout',
}

/**
 * @description: Get token list
 */

export const getTokenList = (params: BaseListReq, mode: ErrorMessageMode = 'message') => {
  return defHttp.post<BaseDataResp<TokenListResp>>(
    { url: Api.GetTokenList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new token
 */
export const createToken = (params: TokenInfo, mode: ErrorMessageMode = 'message') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateToken, params: params },
    {
      errorMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the token
 */
export const updateToken = (params: TokenInfo, mode: ErrorMessageMode = 'message') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateToken, params: params },
    {
      errorMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tokens
 */
export const deleteToken = (params: BaseUUIDsReq, mode: ErrorMessageMode = 'message') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteToken, params: params },
    {
      errorMessageMode: mode,
    },
  );
};

/**
 *  @description: Get token By ID
 */
export const getTokenById = (params: BaseUUIDReq, mode: ErrorMessageMode = 'message') => {
  return defHttp.post<BaseDataResp<TokenInfo>>(
    { url: Api.GetTokenById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};

export const logout = (uuid: string) => defHttp.post({ url: Api.Logout, params: { UUID: uuid } });