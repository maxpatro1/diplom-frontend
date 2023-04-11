# diplom-frontend

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



////


ПРОЕКТ ДЕЛАЛСЯ КАК ПРОБНЫЙ, ЧИСТО ПОТЕСТИТЬ ФРОНТ

vue.config.js - некорректное наименование файла (нужна точка вместо запятой)

Настроить eslint

Убрать остаточные файлы с тестового проекта Vue (assets logo)

Разбить store на отдельные модули. Подумать над их архитектурой

baseUrl вынести в env и определять его в main.js

в апи где-то используется baseUrl, где-то он передается, а где-то берется из this

некоторые baseUrl в апи совсем не базовые, а используются только раз

в апи плохо построена структура

плохая файловая структура в проекте

axios headers задаются вне запроса в одном классе AuthResource. надо сделать глобально

нет pages директории

не валидируются props в компонентах

можно было бы подключить шрифты

X - лучше использовать typescript (но это уже не очень для студентов)

есть ненужные комментарии

в components не только vue файлы, но и pdf js css

импорты писать с глобальными путями

в public ресурсы, которые нужно поместить в assets.

старая версия VUE



////


bootstrap
axios
vuex
vue-router


Components: (page / size)
  - Authorization / s
  - CourseCard / s
  - CoursesList / s
  - StudentMain / s
  - FirstLab / l
  - LabCard / s
  - LabList / s


API:
  - AuthResourceЖ
    - register: await axios.post(`${this.url}/users`, {
          username: username,
          password: password
      }, {headers: DEFAULT_HEADERS})
    - login: await axios.post(`${this.url}/token/`, {
          username: username,
          password: password
      })
    - logout: return true

  - CourseResource:
    - getStartedCourses: await axios.get(this.url + '/started', params)

  - LabResource:
    - getCompletedLabs: await axios.get(this.url + '/completed', params)
    - getLabByCourseId: await axios.get('api/course/labs', params)
    - getFile: await axios.get('api/lab/file', params)

  - Resource:
    - fetch: axios.get(`${this.url}/all`, params)
    - get: axios.get(`${this.url}/${params.id}`)
    - save: await axios.request({
        method, // post | put
        url: id ? URL + this.url + '/update/' + id : URL + this.url + '/new',
        data: params
      });
    - delete: axios.delete(this.url + '/' + params.id, params)

  - User:
    - getUser: axios.get(`${this.url}/`, { params: { username: username } })


Pages:
  - Authorization
  - StudentMain
  - LabList
  - FirstLab

  