<template>
  <v-form class="university" @submit="submit">
    <base-select
      v-model="university"
      name="university"
      :dropdown-items="universityItems"
      placeholder="Выберите свой ВУЗ"
    />
    <base-radio-box
      v-model="educationForm"
      name="educationForm"
      label="Кем являюсь?"
      :items="educationFormItems"
    />
    <base-select
      v-model="course"
      name="course"
      :dropdown-items="coursesItems"
      placeholder="Выберите курс"
    />
    <base-input
      v-model="group"
      name="group"
      type="text"
      placeholder="Введите номер группы"
    />
    <base-button type="submit">Зарегистрироваться</base-button>
  </v-form>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import BaseRadioBox from '@/components/base/BaseRadioBox.vue';
import { Form } from 'vee-validate';

const UNIVERSITY_ITEMS = [
  {
    label: 'ЛЭТИ',
    valueToSend: 'ЛЭТИ'
  },
  {
    label: 'Политех',
    valueToSend: 'Политех'
  },
  {
    label: 'Военмех',
    valueToSend: 'Военмех'
  },
  {
    label: 'СПБГУ',
    valueToSend: 'СПБГУ'
  },
];

const EDUCATION_FORM_ITEMS = [
  {
    label: 'Бакалавр',
    valueToSend: 'Бакалавр'
  },
  {
    label: 'Специалитет',
    valueToSend: 'Специалитет'
  },
  {
    label: 'Магистр',
    valueToSend: 'Магистр'
  },
  {
    label: 'Аспирант',
    valueToSend: 'Аспирант'
  }
];

const COURSES_ITEMS = [
  {
    value: '1',
    valueToSend: '1'
  },
  {
    value: '2',
    valueToSend: '2'
  },
  {
    value: '3',
    valueToSend: '3'
  },
  {
    value: '4',
    valueToSend: '4'
  },
];

export default {
  name: 'UniversityInfoForm',
  components: {
    BaseButton,
    BaseInput,
    BaseSelect,
    BaseRadioBox,
    VForm: Form
  },
  data() {
    return {
      university: {
        value: '',
        valueToSend: ''
      },
      universityItems: UNIVERSITY_ITEMS,
      educationForm: EDUCATION_FORM_ITEMS[0],
      educationFormItems: EDUCATION_FORM_ITEMS,
      course: {
        value: '',
        valueToSend: ''
      },
      coursesItems: COURSES_ITEMS,
      group: ''
    };
  },
  methods: {
    submit() {
      this.$emit('submitForm', {
        university: this.university.valueToSend,
        educationForm: this.educationForm.valueToSend,
        course: this.course.valueToSend,
        group: this.group
      })
    },
  }
};
</script>

<style lang="scss" scoped>
.university {
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: 24px;
}
</style>
