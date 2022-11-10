<template>
  <div class="row m-0">
    <CustomHeader :labs="labs"></CustomHeader>
    <div class="margin-header d-flex flex-row align-items-end">
      <div class="width-60 mx-4 d-flex flex-column">
        <div class="header-lab-text">Исследование вакуумной системы</div>
        <div class="header-subtitle">Предметы > ТМиЭЭлТ > Лабораторная работа №1</div>
      </div>
<!--      <div class="width-40 mx-5 d-flex justify-content-center">-->
<!--        <div class="header-task">Исследование вакуумной системы<br> технологической установки по программной модели-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="width-60">
      <div class="lab-name d-flex m-0 justify-content-center align-items-center mx-4">
        <span class="lab-text">Технологическая установка</span>
      </div>
      <div class="task-card-left mx-4 px-5 py-4">
        <div class="row">
          <div :style="{'background-color': cameraColor }" class="camera" v-b-tooltip.top="'Камера'"></div>
          <div class="pipe-color air-pipe" :style="{'background-color': isAirPumpOpen}"></div>
          <b-button
              @click="chamberOpen('isAirOpen')"
              v-b-tooltip.right="'Подача воздуха'"
              class="v4"
          >
            К4
          </b-button>
          <div class="pipe-color air-pipe" :style="{'background-color': `#05B024`}"></div>
          <b-button
              class="air-button"
              v-b-tooltip.top="'Накачка воздуха'"
          >Воздух
          </b-button>
        </div>
        <div class="row">
          <div class="width-80">
            <div class="row g-0">
              <div class="v1-pipe" :style="{'background-color': isV1PumpOpen}"></div>
              <div class="flp-pipe pipe-color"></div>
              <div class="v3-pipe-in" :style="{'background-color': isV3PumpOpen}"></div>
            </div>
            <div class="row g-0">
              <b-button
                  @click="chamberOpen('isV1open')"
                  v-b-tooltip.right="'Первый клапан'"
                  class="v1"
              >
                К1
              </b-button>
              <div
                  v-b-tooltip.bottom="'Монометр для измерения давления в камере'"
                  class="flp-pressure d-flex justify-content-center align-items-center"
              >
                P1, Па
              </div>
              <b-button
                  @click="chamberOpen('isV3open')"
                  v-b-tooltip.right="'Третий клапан'"
                  class="v3"
              >
                К3
              </b-button>
            </div>
            <div class="row g-0">
              <div class="v1-pipe" :style="{'background-color': isTMPPumpOpen}"></div>
              <div class="v3-pipe" :style="{'background-color': isFLPPumpOpen}"></div>
            </div>
            <div class="row">
              <b-button
                  @click="chamberOpen('isTMPopen')"
                  v-b-tooltip.right="'Высоковакуумный насос'"
                  class="tmp"
              >
                ТМН
              </b-button>
              <div class="v2-pipe" :style="{'background-color': isV2PumpOpen}"></div>
              <b-button
                  @click="chamberOpen('isV2open')"
                  v-b-tooltip.bottom="'Второй клапан'"
                  class="v2"
              >
                К2
              </b-button>
              <div class="v2-pipe" :style="{'background-color': isFLPPumpOpen}"></div>
              <b-button
                  @click="chamberOpen('isFLPopen')"
                  v-b-tooltip.bottom="'Низковакуумный насос'"
                  class="flp"
              >
                ФВН
              </b-button>
            </div>
            <div class="row g-0">
              <div class="tmp-pipe pipe-color"></div>
              <div class="out-pipe" :style="{'background-color': isFLPPumpOpen}"></div>
            </div>
            <div class="row">
              <div
                  v-b-tooltip.righttop="'Монометр для измерения давления низковакуумного насоса'"
                  class="tmp-pressure d-flex justify-content-center align-items-center"
              >
                P2, Па
              </div>
              <div
                  v-b-tooltip.bottom="'Атмосфера'"
                  class="atm d-flex justify-content-center align-items-center"
              >
                Атмосфера
              </div>
            </div>
          </div>
          <div class="width-20 panel-card mx-2 mt-5">
            <p class="panel-header mt-3">Панель управления</p>
            <div class="mt-2">
              <div class="d-flex justify-content-center">
                <b-button class="position-button" @click="chamberOpen('isTurnOn')" :class="turnButtonClass">
                  {{ turnButtonText }}
                </b-button>
              </div>
              <div class="d-flex justify-content-center">
                <b-button
                    v-if="chambers.isTurnOn"
                    class="position-button mt-2"
                    @click="chamberOpen('isStarted')"
                    :class="startButtonClass">{{ startButtonText }}
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="width-40 d-flex justify-content-center">
      <div class="d-flex flex-column">
        <div class="task-header m-0 d-flex justify-content-center align-items-center">
          <span class="lab-text">Задание </span>
        </div>
        <div class="task-card">
          <div class="mt-2 card-margin">
            <span class="task-text">
              Откачка вакуума:
              <ul class="m-0">
                <li>
                   Построить кривую откачки с помощью ФВН до 1000 Па
                </li>
                <li>
                   Построить кривую откачки с помощью ТМН от 1000 Па до 10 <sup>-3</sup> Па
                </li>
              </ul>
              Подробное описание лабораторной работы
              <a target="_blank" href="../../../../assets/document.pdf">тут</a>
            </span>
          </div>
          <div class="mt-3 row justify-content-between align-items-center panel-margin">
            <div class="tmp-pump-parameters-card mx-3">
              <span class="parameters-header">Параметры насоса ФВН</span>
              <div class="mt-1">
                <div class="row mt-1 align-items-center justify-content-start margin-input">
                  <div class="parameters-letter task-text">S</div>
                  <b-form-input v-model="S01" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">м<sup>3</sup>/c</div>
                </div>
                <div class="row mt-1 align-items-center justify-content-start margin-input">
                  <div class="parameters-letter task-text">Q</div>
                  <b-form-input v-model="Qin1" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">м<sup>3</sup>&#183;Па/c</div>
                </div>
                <div class="row mt-1 align-items-center justify-content-start margin-input">
                  <div class="parameters-letter task-text">l</div>
                  <b-form-input v-model="l1" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">м</div>
                </div>
                <div class="row mt-1 align-items-center justify-content-start margin-input">
                  <div class="parameters-letter task-text">d</div>
                  <b-form-input v-model="d1" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">м</div>
                </div>
              </div>
            </div>
            <div class="flp-pump-parameters-card mx-3">
              <span class="parameters-header">Параметры насоса ТМН</span>
              <div class="mt-1">
                <div class="row mt-1 align-items-center justify-content-start margin-input">
                  <div class="parameters-letter task-text">S</div>
                  <b-form-input v-model="S02" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">м<sup>3</sup>/c</div>
                </div>
                <div class="row mt-1 align-items-center justify-content-start margin-input">
                  <div class="parameters-letter task-text">Q</div>
                  <b-form-input v-model="Qin2" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">м<sup>3</sup>&#183;Па/c</div>
                </div>
                <div class="row mt-1 align-items-center justify-content-start margin-input">
                  <div class="parameters-letter task-text">l</div>
                  <b-form-input v-model="l2" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">м</div>
                </div>
                <div class="row mt-1 align-items-center justify-content-start margin-input">
                  <div class="parameters-letter task-text">d</div>
                  <b-form-input v-model="d2" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">м</div>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="mt-2 row p-0">
            <div class="time-input mb-2 w-50 padding-tool align-items-center">
              <span class="m-0 task-text">Время откачки</span>
              <div class="row align-items-center m-0">
                  <div class="parameters-letter task-text">t</div>
                  <b-form-input :disabled="true" v-model="t" class="parameter-input"></b-form-input>
                  <div class="parameters-letter task-text align-items-center">с</div>
              </div>
            </div>
            <div class="time-input align-items-center mb-2 p-0 justify-content-center time-input-margin">
              <label class="m-0 task-text">Ускорение времени: {{ timeKoef }}</label>
              <div class="d-flex justify-content-between align-items-center">
                <div class="pend mx-1">0.5</div>
                <input
                    type="range"
                    v-model="timeKoef"
                    class="form-range m-0"
                    min="0.5"
                    max="100"
                    step="1">
                <div class="pend mx-1">100</div>
              </div>
          </div>
          </div>
          <div class="mt-2 card-margin d-flex justify-content-between">
            <div class="mt-2">
              <label class="tool-header">Показания приборов:</label>
              <div class="indicators-panel">
                <div class="row align-items-center justify-content-center">
                  <div class="parameters-letter mt-3 task-text mx-2">P1</div>
                  <b-form-input v-model="FLPPressure" class="parameter-input mt-3"></b-form-input>
                  <div class="parameters-units task-text mt-3">Па</div>
                </div>
                <div class="row mt-2 align-items-center justify-content-center">
                  <div class="parameters-letter task-text mx-2">P2</div>
                  <b-form-input v-model="TMPPressure" class="parameter-input"></b-form-input>
                  <div class="parameters-units task-text align-items-center">Па</div>
                </div>
              </div>
            </div>
            <div class="status-input">
              <span class="status-text mt-1">Статус:</span>
              <b-form-textarea disabled v-model="getStatus" class="text-area status-text-input" size="sm"></b-form-textarea>
              <div class="d-flex justify-content-between">
                <b-button v-b-toggle.journal class="journal-button task-text mt-2 col-5">Журнал</b-button>
                <b-button class="end-button task-text mt-2 col-5">Завершить</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-sidebar title="Лабораторные работы" no-header id="journal" right backdrop shadow>
      <h5 class="my-3 mx-1">Журнал</h5>
      <b-list-group>
        <b-list-group-item class="m-1" :variant="message.class" v-for="message in journal" :key="message.id">
          {{ message.text }}
        </b-list-group-item>
      </b-list-group>
    </b-sidebar>
    <div v-if="haveError" class="error">
      <div>Критическая ошибка!</div>
      <b-button class="error-button" variant="danger" @click="test">Начать заново</b-button>
    </div>
  </div>
</template>

<script>
import CustomHeader from "../../CustomHeader";
import FirstLabRules from "./first-lab-rules";
import LabResource from "../../../../resources/lab";

export default {
  name: "FirstLab",
  components: {CustomHeader},
  data() {
    return {
      labs: null,
      //1
      S01: 0.005,
      d1: 0.04,
      l1: 0.08,
      Qin1: 0.5,
      //2
      S02: 0.09,
      d2: 0.5,
      l2: 0.3,
      Qin2: 0.0001,
      highPressureMax: 100000,
      highPressureBothPumps: 1000,
      lowPressureMax: 1000,
      lowPressure: 1000,
      highPressure: 10000,
      t: 0,
      t1: 0,
      t2: 0,
      t3: 0,
      v: 0.04,
      FLPPressure: 0,
      TMPPressure: null,
      timeKoef: 1,
      chambers: {
        isTurnOn: null,
        isAirOpen: null,
        isV1open: null,
        isV2open: null,
        isV3open: null,
        isFLPopen: null,
        isTMPopen: null,
        isStarted: null,
        isAirCamera: null,
      },
      haveError: false,
      journal: []
    }
  },
  methods: {
    test() {
      this.haveError = false
    },
    chamberOpen(chamberName) {
      this.chambers[chamberName] = !this.chambers[chamberName]
      if (chamberName === 'isAirOpen') {
        this.chambers.isAirCamera = true
      }
      if (chamberName === 'isTurnOn' && this.chambers.isTurnOn) {
        this.chambers.isStarted = true
      } else {
        if ((chamberName === 'isV1open' && this.chambers['isV3open']) || (chamberName === 'isV3open' && this.chambers['isV1open'])
            || (chamberName === 'isV1open' && this.chambers['isAirOpen']) || (chamberName === 'isV3open' && this.chambers['isAirOpen'])) {
          this.haveError = true
        }
        this.chambers[chamberName] ? this.journal.push({
          text: `${chamberName.split('is')[1].split('open')[0]} клапан был открыт`,
          class: 'success'
        }) : this.journal.push({
          text: `${chamberName.split('is')[1].split('open')[0]} клапан был закрыт`,
          class: 'success'
        })
      }

    },
    async fetchData() {
      this.labs = await LabResource.getLabByCourseId({id: 2})
    },
    pupm(name, t, type) {
      console.log('1:', this.FLPPressure)
      if (name === 'forevacuum') {
        if (this.FLPPressure === null) {
          this.FLPPressure = this.highPressureMax
        }
        this.FLPPressure = FirstLabRules.calculatingPressure(this.FLPPressure,
            t, name, this.S01, this.S02, this.v, this.Qin1,
            this.Qin2, this.d1, this.l1, this.d2, this.l2, this.highPressureMax)
      } else if (name === 'turbomolec') {
        if (this.TMPPressure === null) {
          this.TMPPressure = this.FLPPressure
        }
        if (type === 'both' ) {
          console.log('2:', this.FLPPressure);
          if (t === 0) {
            this.highPressureBothPumps = this.FLPPressure
          }
          this.FLPPressure = FirstLabRules.calculatingPressure(this.FLPPressure,
            t, name, this.S01, this.S02, this.v, this.Qin1,
            this.Qin2, this.d1, this.l1, this.d2, this.l2, this.highPressureBothPumps)
          console.log('3:', this.FLPPressure);
        } else {
         this.TMPPressure = FirstLabRules.calculatingPressure(this.TMPPressure,
            t, name, this.S01, this.S02, this.v, this.Qin1,
            this.Qin2, this.d1, this.l1, this.d2, this.l2, this.highPressureMax)
        }
      }
    },
    computeTime() {
      this.t = this.t1 + this.t2 + this.t3;
    },
    // async getGraph() {
    //   const params = {
    //     s01: this.S01,
    //     s02: this.S02,
    //     v: this.v,
    //     Qin1: this.Qin1,
    //     Qin2: this.Qin2,
    //     d1: this.d1,
    //     d2: this.d2,
    //     l1: this.l1,
    //     l2: this.l2
    //   }
    //   // const file = await LabResource.getFile({params: {params}})
    // },
    clearingData() {
      this.journal.push({text: `Критическая ошибка`, class: 'danger'});
      this.chambers = {
        isTurnOn: null,
        isAirOpen: null,
        isV1open: null,
        isV2open: null,
        isV3open: null,
        isFLPopen: null,
        isTMPopen: null,
        isStarted: null,
        isAirCamera: null,
      }
      this.FLPPressure = 0;
      this.TMPPressure = 0
    }
  },
  computed: {
    getStatus() {
      return this.journal[this.journal.length - 1] ? this.journal[this.journal.length - 1].text : ''
    },
    calculateColor() {
      let green = 256 - (this.FLPPressure / (this.highPressureMax)) * (256 - 5);
      if (!this.FLPPressure) {
        green = 5
      }
      if (this.chambers.isAirOpen && !this.FLPPressure) {
        green = 255
      }
      return `rgb(${green + 5}, 176, 36)`
    },
    isForevacuumPump() {
      return this.chambers.isTurnOn
          && this.chambers.isV3open
          && this.chambers.isFLPopen
          && this.chambers.isStarted
    },
    isCameraPressure() {
      return this.chambers.isAirOpen;
    },
    isTurbomolecPump() {
      return this.chambers.isTurnOn
          && this.chambers.isFLPopen
          && this.chambers.isV2open
          && !this.chambers.isV1open
          && this.chambers.isTMPopen
          && this.chambers.isStarted
          && this.FLPPressure != null
    },
    isBothPumpsPump() {
      return this.chambers.isTurnOn
                && this.chambers.isFLPopen
                && this.chambers.isV2open
                && this.chambers.isV1open
                // && this.chambers.isV1open
                && this.chambers.isTMPopen
                && this.chambers.isStarted
                && this.FLPPressure != null
    },
    turnButtonClass() {
      return this.chambers.isTurnOn ? 'turn-off task-text turn' : 'turn-on task-text turn'
    },
    turnButtonText() {
      return this.chambers.isTurnOn ? 'Выключить' : 'Включить'
    },
    startButtonClass() {
      return this.chambers.isStarted ? 'turn-off task-text turn' : 'turn-on task-text turn'
    },
    startButtonText() {
      return this.chambers.isStarted ? 'Пауза' : 'Старт'
    },
    cameraColor() {
      const defaultColor = `#FFFFFF`
      if (this.chambers.isAirOpen) {
        return this.calculateColor
      }
      return this.chambers.isAirCamera ? this.calculateColor : defaultColor
    },
    isAirPumpOpen() {
      return this.chambers.isAirOpen ? `#05B024` : `#BFBFBF`
    },
    isV3PumpOpen() {
      return this.chambers.isV3open ? this.calculateColor : `#BFBFBF`
    },
    isV1PumpOpen() {
      return this.chambers.isV1open ? this.calculateColor : `#BFBFBF`
    },
    isValveErrors() {
      let error = null
      if (this.chambers.isV1open && this.chambers.isV3open) {
        error = this.chambers.isV1open && this.chambers.isV3open
      }
      if ((this.chambers.isAirOpen && this.chambers.isV1open) || (this.chambers.isAirOpen && this.chambers.isV3open)) {
        error = (this.chambers.isAirOpen && this.chambers.isV1open) || (this.chambers.isAirOpen && this.chambers.isV3open)
      }
      if (error) {
        this.$bvToast.show('critical')
      }
      return error
    },
    isV2PumpOpen() {
      return this.chambers.isV2open ? this.calculateColor : `#BFBFBF`
    },
    isFLPPumpOpen() {
      return this.chambers.isFLPopen ? this.calculateColor : `#BFBFBF`
    },
    isTMPPumpOpen() {
      return this.chambers.isTMPopen ? this.calculateColor : `#BFBFBF`
    },
  },
  watch: {
    isTurbomolecPump() {
      let turbomolec = setInterval(() => {
        if (this.isTurbomolecPump) {
          this.t2 = this.t2 + parseFloat(this.timeKoef)
          this.computeTime()
          this.pupm('turbomolec', this.t2)
        } else {
          clearInterval(turbomolec)
        }
      }, 1000)

    },
    isBothPumpsPump() {
      let turbomolec = setInterval(() => {
        if (this.isBothPumpsPump) {
          this.t3 = this.t3 + parseFloat(this.timeKoef)
          this.computeTime()
          this.pupm('turbomolec', this.t3, 'both')
        } else {
          clearInterval(turbomolec)
        }
      }, 1000)

    },
    isForevacuumPump() {
      let forevacuum = setInterval(() => {
        if (this.isForevacuumPump) {
          this.t1 = this.t1 + parseFloat(this.timeKoef)
          this.computeTime()
          this.pupm('forevacuum', this.t1)
        } else {
          clearInterval(forevacuum)
        }
      }, 1000)

    },
    isValveErrors() {
      if (this.isValveErrors) {
        this.clearingData()
      }
    },
    isCameraPressure() {
      let cameraPressure = setInterval(() => {
        if (this.chambers.isAirOpen && this.FLPPressure < 10 ** 5) {
          this.FLPPressure = parseFloat(this.FLPPressure) + 5000 * this.timeKoef
          if (this.FLPPressure > 10 ** 5) {
            this.FLPPressure = 100000
          }
        } else {
          clearInterval(cameraPressure)
        }
      }, 1000)
    }
  },
  created() {
    this.fetchData()
  },
}
</script>

<style scoped>
@import './FirstLab.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
</style>