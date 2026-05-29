export const compactKey = (value: string) => value.replace(/[^A-Za-z0-9]/g, '');

export const serviceTitleKey = (value: string) => `service${compactKey(value)}`;
export const serviceCategoryKey = (value: string) => `serviceCategory${compactKey(value)}`;
export const categoryKey = (value: string) => `category${compactKey(value)}`;

export const stylistIntroKey = (name: string) => {
  if (name.startsWith('Aiko')) return 'stylistAikoIntro';
  if (name.startsWith('Elena')) return 'stylistElenaIntro';
  return 'stylistMinhoIntro';
};

export const stylistSpecialtiesKey = (name: string) => {
  if (name.startsWith('Aiko')) return 'stylistAikoSpecialties';
  if (name.startsWith('Elena')) return 'stylistElenaSpecialties';
  return 'stylistMinhoSpecialties';
};

export const reviewKey = (name: string) => {
  if (name.startsWith('Sophie')) return 'reviewSophie';
  if (name.startsWith('Daniel')) return 'reviewDaniel';
  return 'reviewMina';
};
