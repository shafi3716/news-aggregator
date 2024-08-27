import dayjs, { OpUnitType, QUnitType } from 'dayjs'

export const DateUtil = {
    diff,
    now,
    parse
}

function diff(leftDate: dayjs.Dayjs, rightDate: dayjs.Dayjs, unitType?: QUnitType | OpUnitType, decimalDiff?: boolean) {
  return parse(leftDate).diff(rightDate, unitType, decimalDiff)
}

function now() {
  return dayjs()
}

function parse(date: any, formatStr?: string, local?: string) {
  if (!formatStr) formatStr = "DD/MM/YYYY hh:mm A"
  return dayjs(date, formatStr, local)
}