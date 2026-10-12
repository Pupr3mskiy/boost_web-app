export interface DemoReview {
  id: string;
  /** Ключ локализации, чтобы не хранить тексты в коде */
  textKey: string;
  /** Короткая подпись-плейсхолдер (не имя реального клиента) */
  placeholderLabelKey: string;
  rating: number; // 1..5
}