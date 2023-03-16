import http from '@/utils/http';
import { PersonListParams } from '@/views/portrait/peopleSearch';
import { PersonItem } from '@/views/portrait/peopleSearch/PeopleList/PeopleItem';

const personInfo = `/knowledgegraph-service/personInfo`;
const api = {
  fuzzyQueryPersonInPage: `${personInfo}/fuzzyQueryPersonInPage`,
};

/**
 * 全息档案-人员信息模糊分页查询
 * @param params
 * @returns
 */
export function fuzzyQueryPersonInPage(
  params: PersonListParams
): Promise<Common.PageResponse<PersonItem>> {
  return http.get(api.fuzzyQueryPersonInPage, { params });
}
