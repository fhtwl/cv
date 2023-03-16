import http from '@/utils/http';
import {
  BaseInfo,
  FamilyInfo,
} from '@/views/portrait/holographicArchives/Tabs/BasicInfo';
import { SalaryInfo } from '@/views/portrait/holographicArchives/Tabs/BasicInfo/Income';
import {
  EmotionInfo,
  EmotionParams,
} from '@/views/portrait/holographicArchives/Tabs/EmotionalAnalysis';
import {
  SocialActivityInfo,
  SocialActivityParams,
} from '@/views/portrait/holographicArchives/Tabs/FocusOnActivities';
import { Resume } from '@/views/portrait/holographicArchives/Tabs/PreviousResume';
import { RelationParams } from '@/views/portrait/holographicArchives/Tabs/RelationalAtlas';
import { PersonCategorizeTotal } from '@/views/portrait/holographicArchives/TotalBox';
import { GraphData } from '@antv/g6';
import { PersonItem } from '../../../views/portrait/peopleSearch/PeopleList/PeopleItem/index';

const personInfo = `/knowledgegraph-service/personInfo`;
const personRelation = `/knowledgegraph-service/personRelation`;

const api = {
  countByPersonId: `${personInfo}/countByPersonId`,
  getBaseInfoByPersonId: `${personInfo}/getBaseInfoByPersonId`,
  getFamilyInfoByPersonId: `${personInfo}/getFamilyInfoByPersonId`,
  getSalaryInfoByPersonId: `${personInfo}/getSalaryInfoByPersonId`,
  getResumeByPersonId: `${personInfo}/getResumeByPersonId`,
  getEmotionByPersonIdInPage: `${personInfo}/getEmotionByPersonIdInPage`,
  getSocialActivityByPersonIdInPage: `${personInfo}/getSocialActivityByPersonIdInPage`,
  getRelationByPersonId: `${personRelation}/getRelationByPersonId`,
  getValuationByPersonId: `${personInfo}/getValuationByPersonId`,
  getSimpleInfoByPersonId: `${personInfo}/getSimpleInfoByPersonId`,
};

/**
 * 全息档案-基本信息与社会关系数量统计
 * @param params
 * @returns
 */
export function countByPersonId(params: { personId: number }): Promise<{
  items: PersonCategorizeTotal[];
  total: number;
}> {
  return http.get(api.countByPersonId, { params });
}

/**
 * 全息档案-选项卡-基本信息-基础资料
 * @param params
 * @returns
 */
export function getSimpleInfoByPersonId(params: {
  personId: number;
}): Promise<PersonItem> {
  return http.get(api.getSimpleInfoByPersonId, { params });
}

/**
 * 全息档案-选项卡-基本信息-基础资料
 * @param params
 * @returns
 */
export function getBaseInfoByPersonId(params: {
  personId: number;
}): Promise<BaseInfo> {
  return http.get(api.getBaseInfoByPersonId, { params });
}

/**
 * 全息档案-选项卡-基本信息-家庭信息
 * @param params
 * @returns
 */
export function getFamilyInfoByPersonId(params: {
  personId: number;
}): Promise<FamilyInfo[]> {
  return http.get(api.getFamilyInfoByPersonId, { params });
}

/**
 * 全息档案-选项卡-基本信息-收入情况
 * @param params
 * @returns
 */
export function getSalaryInfoByPersonId(params: {
  personId: number;
}): Promise<SalaryInfo> {
  return http.get(api.getSalaryInfoByPersonId, { params });
}

/**
 * 全息档案-选项卡-基本信息-综合评价
 * @param params
 * @returns
 */
export function getValuationByPersonId(params: {
  personId: number;
}): Promise<{ evaluation: string }> {
  return http.get(api.getValuationByPersonId, { params });
}

/**
 * 全息档案-选项卡-过往履历
 * @param params
 * @returns
 */
export function getResumeByPersonId(params: {
  personId: number;
}): Promise<Resume[]> {
  return http.get(api.getResumeByPersonId, { params });
}

/**
 * 全息档案-选项卡-情感分析分页筛选查询
 * @param params
 * @returns
 */
export function getEmotionByPersonIdInPage(
  params: EmotionParams
): Promise<Common.PageResponse<EmotionInfo>> {
  return http.get(api.getEmotionByPersonIdInPage, { params });
}

/**
 * 全息档案-选项卡-关注活动分页筛选查询
 * @param params
 * @returns
 */
export function getSocialActivityByPersonIdInPage(
  params: SocialActivityParams
): Promise<Common.PageResponse<SocialActivityInfo>> {
  return http.get(api.getSocialActivityByPersonIdInPage, { params });
}

/**
 * 全息档案-选项卡-关系图谱
 * @param params
 * @returns
 */
export function getRelationByPersonId(
  params: RelationParams
): Promise<GraphData> {
  return http.get(api.getRelationByPersonId, { params });
}
