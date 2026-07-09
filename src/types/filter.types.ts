export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export type RegionOption = {
  label: string;
  value: Region;
};

export const regionOptions: RegionOption[] = [
  {
    label: "Africa",
    value: Region.Africa,
  },
  {
    label: "Americas",
    value: Region.Americas,
  },
  {
    label: "Asia",
    value: Region.Asia,
  },
  {
    label: "Europe",
    value: Region.Europe,
  },
  {
    label: "Oceania",
    value: Region.Oceania,
  },
];
