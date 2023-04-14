import { defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

export default function() {
  defineRule('required', required);
}

configure({
  generateMessage: localize('ru', {
    messages: {
      required: 'Поле должно быть обязательно заполнено',
    },
  }),
});
