
export type ParamType = {
    params: {
        name: string;
        values: ValueType
    }
}

type ValueType = {
    low: number;
    medium: number;
    high: number;
}


export const params = [
    { params: {name: "confidentiality", values: {low: 1, medium: 10, high: 100}}},
    { params: {name: "integrity", values: {low: 1, medium: 10, high: 100}}},
    { params: {name: "availability", values: {low: 1, medium: 10, high: 100}}},
]

export const finalObjestInfo = {
    1: "Идентификация и аутентификация пользователей, являющихся работниками оператора\n" +
        "Идентификация и аутентификация устройств, в том числе стационарных, мобильных и портативных\n" +
        "Управление идентификаторами, в том числе создание, присвоение, уничтожение идентификаторов\n" +
        "Управление средствами аутентификации, в том числе хранение, выдача, инициализация, блокирование средств аутентификации и принятие мер в случае утраты и (или) компрометации средств аутентификации\n" +
        "Защита обратной связи при вводе аутентификационной информации Идентификация и аутентификация пользователей, не являющихся работниками оператора (внешних пользователей)\n" +
        "Идентификация и аутентификация объектов файловой системы, запускаемых и исполняемых модулей, объектов систем управления базами данных, объектов, создаваемых прикладным и специальным программным обеспечением, иных объектов доступа\n" +
        "Управление (заведение, активация, блокирование и уничтожение) учетными записями пользователей, в том числе внешних пользователей Реализация необходимых методов (дискреционный, мандатный, ролевой или иной метод), типов (чтение, запись, выполнение или иной тип) и правил разграничения доступа\n" +
        "Управление (фильтрация, маршрутизация, контроль соединений, однонаправленная передача и иные способы управления) информационными потоками между устройствами, сегментами информационной системы, а также между информационными системами\n" +
        "Разделение полномочий (ролей) пользователей, администраторов и лиц, обеспечивающих функционирование информационной системы Назначение минимально необходимых прав и привилегий пользователям, администраторам и лицам, обеспечивающим функционирование информационной системы\n" +
        "Ограничение неуспешных попыток входа в информационную систему (доступа к информационной системе) Ограничение числа параллельных сеансов доступа для каждой учетной записи пользователя информационной системы\n" +
        "Блокирование сеанса доступа в информационную систему после установленного времени бездействия (неактивности) пользователя или по его запросу\n" +
        "Обеспечение доверенной загрузки средств вычислительной техники Управление запуском (обращениями) компонентов программного обеспечения, в том числе определение запускаемых компонентов, настройка параметров запуска компонентов, контроль за запуском компонентов программного обеспечения\n" +
        "Управление установкой (инсталляцией) компонентов программного обеспечения, в том числе определение компонентов, подлежащих установке, настройка параметров установки компонентов, контроль за установкой компонентов программного обеспечения\n" +
        "Установка (инсталляция) только разрешенного к использованию программного обеспечения и (или) его компонентов",
    2: "Идентификация и аутентификация пользователей, являющихся работниками оператора Идентификация и аутентификация устройств, в том числе стационарных, мобильных и портативных\n" +
    "Управление идентификаторами, в том числе создание, присвоение, уничтожение идентификаторов Управление средствами аутентификации, в том числе хранение, выдача, инициализация, блокирование средств аутентификации и принятие мер в случае утраты и (или) компрометации средств аутентификации\n" +
    "Защита обратной связи при вводе аутентификационной информации Идентификация и аутентификация пользователей, не являющихся работниками оператора (внешних пользователей) Идентификация и аутентификация объектов файловой системы, запускаемых и исполняемых модулей, объектов систем управления базами данных, объектов, создаваемых прикладным и специальным программным обеспечением, иных объектов доступа\n" +
"Управление (заведение, активация, блокирование и уничтожение) учетными записями пользователей, в том числе внешних пользователей\n"
        + "Реализация необходимых методов (дискреционный, мандатный, ролевой или иной метод), типов (чтение, запись, выполнение или иной тип) и правил разграничения доступа\n"
        + "Управление (фильтрация, маршрутизация, контроль соединений, однонаправленная передача и иные способы управления) информационными потоками между устройствами, сегментами информационной системы, а также между информационными системами\n"
        + "Разделение полномочий (ролей) пользователей, администраторов и лиц, обеспечивающих функционирование информационной системы\n"
        + "Назначение минимально необходимых прав и привилегий пользователям, администраторам и лицам, обеспечивающим функционирование информационной системы\n"
        + "Ограничение неуспешных попыток входа в информационную систему (доступа к информационной системе)\n"
        + "Блокирование сеанса доступа в информационную систему после установленного времени бездействия (неактивности) пользователя или по его запросу\n"
        + "Обеспечение доверенной загрузки средств вычислительной техники\n"
        + "Управление установкой (инсталляцией) компонентов программного обеспечения, в том числе определение компонентов, подлежащих установке, настройка параметров установки компонентов, контроль за установкой компонентов программного обеспечения\n"
        + "Установка (инсталляция) только разрешенного к использованию программного обеспечения и (или) его компонентов",
    3: "Идентификация и аутентификация пользователей, являющихся работниками оператора\n"
        + "Управление идентификаторами, в том числе создание, присвоение, уничтожение идентификаторов\n"
        + "Управление средствами аутентификации, в том числе хранение, выдача, инициализация, блокирование средств аутентификации и принятие мер в случае утраты и (или) компрометации средств аутентификации\n"
        + "Защита обратной связи при вводе аутентификационной информации\n"
        + "Идентификация и аутентификация пользователей, не являющихся работниками оператора (внешних пользователей)\n"
        + "Идентификация и аутентификация объектов файловой системы, запускаемых и исполняемых модулей, объектов систем управления базами данных, объектов, создаваемых прикладным и специальным программным обеспечением, иных объектов доступа\n"
        + "Управление (заведение, активация, блокирование и уничтожение) учетными записями пользователей, в том числе внешних пользователей\n"
        + "Реализация необходимых методов (дискреционный, мандатный, ролевой или иной метод), типов (чтение, запись, выполнение или иной тип) и правил разграничения доступа\n"
        + "Управление (фильтрация, маршрутизация, контроль соединений, однонаправленная передача и иные способы управления) информационными потоками между устройствами, сегментами информационной системы, а также между информационными системами\n"
        + "Разделение полномочий (ролей) пользователей, администраторов и лиц, обеспечивающих функционирование информационной системы\n"
        + "Назначение минимально необходимых прав и привилегий пользователям, администраторам и лицам, обеспечивающим функционирование информационной системы\n"
        + "Ограничение неуспешных попыток входа в информационную систему (доступа к информационной системе)\n"
        + "Блокирование сеанса доступа в информационную систему после установленного времени бездействия (неактивности) пользователя или по его запросу\n"
        + "Установка (инсталляция) только разрешенного к использованию программного обеспечения и (или) его компонентов"


}