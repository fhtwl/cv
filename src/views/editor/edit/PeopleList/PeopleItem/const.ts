/**
 * 态度类型
 * 友好1, 一般2, 抵触3
 */
export enum AttitudeType {
  /**
   * 友好
   */
  AMICABLE = 1,
  /**
   * 一般
   */
  GENERAL,
  /**
   * 抵触
   */
  CONFLICTING,
}

interface AttitudeOption extends Common.Option<AttitudeType> {
  color: string;
}
/**
 * 态度
 */
export const attitudeOptions: AttitudeOption[] = [
  {
    value: 1,
    label: '友好',
    color: '#00DA6E',
  },
  {
    value: 2,
    label: '一般',
    color: '#5599FF',
  },
  {
    value: 3,
    label: '抵触',
    color: '#FF9544',
  },
];

/**
 * 人员角色
 */
export enum PeopleRole {
  /**
   * 政治家
   */
  POLITICIAN = 1,
  /**
   * 科学家
   */
  SCIENTIST,
  /**
   * 智库记者
   */
  THINK_TANK_REPORTER,
  /**
   * 基层公务员
   */
  GRASSROOTS_CIVIL_SERVANTS,
}

/**
 * 人员角色
 */
export const peopleRoleOptions: Common.Option<PeopleRole>[] = [
  {
    value: PeopleRole.POLITICIAN,
    label: '政治家',
  },
  {
    value: PeopleRole.SCIENTIST,
    label: '科学家',
  },
  {
    value: PeopleRole.THINK_TANK_REPORTER,
    label: '智库记者',
  },
  {
    value: PeopleRole.GRASSROOTS_CIVIL_SERVANTS,
    label: '基层公务员',
  },
];
