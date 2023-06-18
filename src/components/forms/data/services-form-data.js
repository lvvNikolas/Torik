import { CITIES } from "../../../constants/cities";
import { SERVICES_CATEGORIES } from "../../../constants/services";
import { PricingPlansJob } from "../../../constants/pricing";

export const servicesInputsTexts = {
  title: {
    name: "Название объявления",
    placeholder: "Клининг для частных домов",
  },
  category: { name: "Вид услуг" },
  photos: { name: "Добавить фото и постер (не более 4 фото)" },
  ownerName: { name: "Имя", placeholder: "Александр" },
  adress: { name: "Адрес объявления", placeholder: "Оранж стрит 28" },
  description: {
    name: "Описание объявления",
    placeholder: "Уборка квартир. Быстро и недорого",
  },
  ownerPhone: { name: "Телефон для контакта", placeholder: "+19835121252" },
  ownerEmail: { name: "Электронная почта", placeholder: "anyone@gmail.com" },
  city: { name: "Город" },
  companyName: { name: "Название компании", placeholder: "Клин энд Шайн" },
  price: { name: "Стоимость услуги", placeholder: "500" },
  extra: { name: "Дополнительно" },
  plans: { name: "Планы" },
  tg: { name: "Ссылка на телеграм", placeholder: "t.me/@your-telegram-name" },
};

// Поля для формы юзера
export const servicesInitialValues = {
  title: "",
  category: SERVICES_CATEGORIES[0].id,
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
  photos: "",
  tg: "",
};

export const servicesAdminInitialValues = (data) => ({
  type: data.type,
  id: data.id,
  title: data.title,
  category: SERVICES_CATEGORIES.find((el) => el.id === data.category).id,
  ownerName: data.ownerName,
  city: CITIES.find((el) => el.id === data.city).id,
  description: data.description,
  ownerPhone: data.ownerPhone,
  ownerEmail: data.ownerEmail,
  adress: data.adress,
  companyName: data.companyName,
  extra: data.extra,
  price: data.price,
  plans: data.plans,
  bannerId: data.bannerId | "",
  priority: data.priority,
  keywords: data.keywords,
  endTime: data.endTime,
  startTime: data.startTime,
  userId: data.userId,
  photos: data.photos,
  tg: data.tg,
  geo: "USA",
});

export const servicesAdminInputsTexts = {
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
  extra: { name: "Дополнительно" },
  price: { name: "Стоимость" },
  plans: { name: "Планы", isAdmin: true },
  bannerId: { name: "Айди баннера(системная)" },
  priority: { name: "Приоритет(системная)" },
  keywords: { name: "Ключевые слова(системная)" },
  userId: { name: "Айди юзера(системная)" },
  endTime: { name: "Дата окончания премиума(системная)" },
  startTime: { name: "Дата начала премиума(системная)" },
  photos: { name: "Фото" },
  tg: { name: "Ссылка на телеграм", placeholder: "t.me/@your-telegram-name" },
  geo: { name: "Cтрана" },
};
