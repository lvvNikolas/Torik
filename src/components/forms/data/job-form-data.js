import { CITIES } from "../../../constants/cities";
import { JOB_CATEGORIES } from "../../../constants/job";
import { PricingPlansJob } from "../../../constants/pricing";

export const jobsInputsTexts = {
  //   type: {
  //     name: "Тип категории",
  //     isAdmin: true,
  //   },
  //   id: { name: "Id", isAdmin: true },
  title: {
    name: "Название объявления",
    placeholder: "Водитель",
  },
  category: { name: "Категория" },
  ownerName: { name: "Имя", placeholder: "Александр" },
  adress: { name: "Адрес объявления", placeholder: "Оранж стрит 28" },
  description: {
    name: "Описание объявления",
    placeholder: "Требуются водители дальнобойщики...",
  },
  ownerPhone: { name: "Телефон для контакта", placeholder: "+19835121252" },
  ownerEmail: { name: "Электронная почта", placeholder: "anyone@gmail.com" },
  city: { name: "Город" },
  companyName: { name: "Название компании", placeholder: "Драйв лимитед" },
  salary: { name: "Размер вознаграждение", placeholder: "500" },
  extra: { name: "Дополнительно" },
  employment: { name: "Занятость" },
  plans: { name: "Планы", isAdmin: true },
  tg: { name: "Ссылка на телеграм", placeholder: "t.me/@your-telegram-name" },
  //   bannerId: { name: "Айди баннера(системная)", isAdmin: true },
  //   priority: { name: "Приоритет(системная)", isAdmin: true },
  //   keywords: { name: "Ключевые слова(системная)", isAdmin: true },
  //   userId: { name: "Айди юзера(системная)", isAdmin: true },
  //   endTime: { name: "Дата окончания премиума(системная)", isAdmin: true },
  //   startTime: { name: "Дата начала премиума(системная)", isAdmin: true },
};

// Поля для формы юзера
export const jobsInitialValues = {
  title: "",
  category: JOB_CATEGORIES[0].id,
  ownerName: "",
  city: CITIES[0].id,
  description: "",
  ownerPhone: "",
  ownerEmail: "",
  adress: "",
  companyName: "",
  salary: "",
  extra: [],
  employment: "",
  plans: PricingPlansJob[1].id,
  tg: "",
};

export const jobsAdminInitialValues = (data) => ({
  type: data.type,
  id: data.id,
  title: data.title,
  category: JOB_CATEGORIES.find((el) => el.id === data.category).id,
  ownerName: data.ownerName,
  city: CITIES.find((el) => el.id === data.city).id,
  description: data.description,
  ownerPhone: data.ownerPhone,
  ownerEmail: data.ownerEmail,
  adress: data.adress,
  companyName: data.companyName,
  salary: data.salary,
  extra: data.extra,
  employment: data.employment,
  plans: data.plans,
  bannerId: data.bannerId,
  priority: data.priority,
  keywords: data.keywords,
  endTime: data.endTime,
  startTime: data.startTime,
  userId: data.userId,
  tg: data.tg,
  geo: "USA",
});

export const jobsAdminInputsTexts = {
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
  employment: { name: "Занятость" },
  plans: { name: "Планы", isAdmin: true },
  bannerId: { name: "Айди баннера(системная)" },
  priority: { name: "Приоритет(системная)" },
  keywords: { name: "Ключевые слова(системная)" },
  userId: { name: "Айди юзера(системная)" },
  endTime: { name: "Дата окончания премиума(системная)" },
  startTime: { name: "Дата начала премиума(системная)" },
  tg: { name: "Ссылка на телеграм" },
  geo: { name: "Cтрана" },
};
