export type Option = {
  code: string;
  label: string;
};

export function findOptionByCode(
  options: Option[],
  code: string
): Option | undefined {
  return options.find(opt => opt.code === code);
}
