//TODO изменить инфу для тарифов

export const PricingPlansJob = [
    {
        id:"STANDART",
        title: "Базовый, без доп услуг",
        price:'Free',
        bonus:null,
        avalible:["Срок публикации 7 дней", "В топе 24 часа"],
        unavalible:["Отметка вип", "Приоритет в списке", "Отображение локации"]
    },
    {
        id:"VIP",
        title: "Вип",
        price:'50$',
        bonus:'10x показов',
        avalible:["Срок публикации 7 дней", "В топе 24 часа", "Отметка вип"],
        unavalible:["Приоритет в списке", "Отображение локации"]
    },
    {
        id:"SUPERVIP",
        price:'100$',
        title: 'Супер вип',
        bonus:'30x показов',
        avalible:["Срок публикации 7 дней", "В топе 24 часа","Отметка вип", "Приоритет в списке", "Отображение локации"],
        unavalible:[]
    },
]


export const PricingPlansRent = [
    {
        id:"STANDART",
        title: "Базовый, без доп услуг",
        price:'Free',
        bonus:null,
        avalible:["Срок публикации 7 дней", "В топе 24 часа"],
        unavalible:["Отметка вип", "Приоритет в списке", "Отображение локации"]
    },
    {
        id:"VIP",
        title: "Вип",
        price:'50$',
        bonus:'10x показов',
        avalible:["Срок публикации 7 дней", "В топе 24 часа", "Отметка вип"],
        unavalible:["Приоритет в списке", "Отображение локации"]
    },
    {
        id:"SUPERVIP",
        price:'100$',
        title: 'Супер вип',
        bonus:'30x показов',
        avalible:["Срок публикации 7 дней", "В топе 24 часа","Отметка вип", "Приоритет в списке", "Отображение локации"],
        unavalible:[]
    },
]

export const PricingPlansService = [

]
