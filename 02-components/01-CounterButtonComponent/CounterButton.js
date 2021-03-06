const CounterButton = {
  name: 'CounterButton',
   // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  // Компонент должен иметь модель
  model: {
    prop: 'count',
    event: 'increment'
  },
  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    btnClick(){
      this.$emit('increment', this.count + 1)
    }

  },
  // Шаблон потребуется отредактировать
  template: `<button type="button" @click=btnClick()>{{count}}</button>`,
};

export default CounterButton;