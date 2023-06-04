// TODO добавить данные по аналогии с job-form-data.js
import { CITIES } from "../../../constants/cities";
import { RENT_CATEGORIES } from "../../../constants/rent";
import { PricingPlansJob } from "../../../constants/pricing";

export const rentInputsTexts = {
  title: {
    name: "Название объявления",
    placeholder: "Двухкомнатные аппартаменты",
  },
  category: { name: "Категория" },
  photos: { name: "Добавить фото и постер (не более 4 фото)" },
  ownerName: { name: "Имя", placeholder: "Александр" },
  adress: { name: "Адрес объявления", placeholder: "Оранж стрит 28" },
  description: {
    name: "Описание объявления",
    placeholder: "Требуются водители дальнобойщики...",
  },
  ownerPhone: { name: "Телефон для контакта", placeholder: "+19835121252" },
  ownerEmail: { name: "Электронная почта", placeholder: "anyone@gmail.com" },
  city: { name: "Город" },
  companyName: { name: "Название компании", placeholder: "Рент лимитед" },
  price: { name: "Стоимость аренды в мес", placeholder: "1500" },
  extra: { name: "Дополнительно" },
  social: { name: "Ссылки на соц сети" },
  plans: { name: "Планы" },
};

// Поля для формы юзера
export const rentInitialValues = {
  title: "",
  category: RENT_CATEGORIES[0].id,
  ownerName: "",
  adress: "",
  description: "",
  ownerPhone: "",
  ownerEmail: "",
  city: CITIES[0].id,
  companyName: "",
  price: "",
  extra: [],
  plans: PricingPlansJob[1].id,
  social: "",
  photos: "",
};

export const rentAdminInitialValues = (data) => ({
  type: data.type,
  id: data.id,
  title: data.title,
  category: RENT_CATEGORIES.find((el) => el.id === data.category).id,
  ownerName: data.ownerName,
  city: CITIES.find((el) => el.id === data.city).id,
  description: data.description,
  ownerPhone: data.ownerPhone,
  ownerEmail: data.ownerEmail,
  adress: data.adress,
  companyName: data.companyName,
  salary: data.salary,
  extra: data.extra,
  price: data.employment,
  plans: data.plans,
  bannerId: data.bannerId,
  priority: data.priority,
  keywords: data.keywords,
  endTime: data.endTime,
  startTime: data.startTime,
  userId: data.userId,
  social: data.social,
  photos: data.photos,
});

export const rentAdminInputsTexts = {
  type: {
    name: "Тип категории",
  },
  id: { name: "Id", isAdmin: true },
  title: {
    name: "Название объявления",
  },
  category: { name: "Категория" },
  ownerName: { name: "Имя" },
  adress: { name: "Адрес объявления" },
  description: {
    name: "Описание объявления",
  },
  ownerPhone: { name: "Телефон для контакта" },
  ownerEmail: { name: "Электронная почта" },
  city: { name: "Город" },
  companyName: { name: "Название компании" },
  salary: { name: "Размер вознаграждение" },
  extra: { name: "Дополнительно" },
  price: { name: "Стоимость аренды" },
  plans: { name: "Планы", isAdmin: true },
  bannerId: { name: "Айди баннера(системная)" },
  priority: { name: "Приоритет(системная)" },
  keywords: { name: "Ключевые слова(системная)" },
  userId: { name: "Айди юзера(системная)" },
  endTime: { name: "Дата окончания премиума(системная)" },
  startTime: { name: "Дата начала премиума(системная)" },
  photos: { name: "Фото квартиры" },
};
