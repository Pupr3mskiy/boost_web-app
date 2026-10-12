export type ServiceCategory =
  | 'competitive'
  | 'duo'
  | 'placement'
  | 'coaching'
  | 'wins'
  | 'tournament'
  | 'individual';

export interface Service {
  id: string;
  category: ServiceCategory;
  titleKey: string;       // ключ в i18n
  textKey: string;
  accent: string;         // цветовой акцент карточки
  startPriceRUB?: number; // базовая цена в RUB, если задана
  popular?: boolean;
}