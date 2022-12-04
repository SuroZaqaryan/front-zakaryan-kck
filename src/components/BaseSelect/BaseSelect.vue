<template>
  <div
      class="dropdown"
      @click="toggleRiskLevels"
      :class="{ expanded: isExpanded }"
      :style="computedStyles"
  >
    <div class="dropdown-label-container">
      <div class="dropdown-label">
        <span class="text">
          {{
            (config.prefix ? config.prefix : "") + " "
          }}{{ config.placeholder ? config.placeholder : "" }}
        </span>
        <i class="angle-down" :class="{ toggled: isExpanded }"></i>

      </div>
    </div>

    <div v-expand="isExpanded" class="options expand">
      <div
          v-for='(option, index) in configOptions'
          :key="index"
          class="option"
          @click="setCurrentSelectedOption(option)"
      >
        <div class="dropdown-text-icon">
          <span class="dropdown-text">{{ option.value }}</span>

          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7 12L5 14L3 12" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 2V14" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 4L11 2L13 4" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 14V2.00001" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isBottomSectionToggled: false,
      optionsHeight: 0,
      optionHeight: 35,
      width: 100,
      configOptions: [],
      backgroundColor: "#cde4f5",
      backgroundExpandedColor: "#fff",
      hoverBackgroundColor: "#0084d4",
      border: "1px solid  #E0E5E6",
      borderRadius: 0,
      textColor: "#000000",
      isExpanded: false,
    };
  },
  components: {},
  props: ["config"],
  computed: {
    computedStyles: function () {
      return [
        {"--options-height": this.optionsHeight + "px"},
        {"--options-height-neg": "-" + this.optionsHeight + "px"},
        {"--option-height": this.optionHeight + "px"},
        {"--main-el-border-radius": this.borderRadius},
        {"--dropdown-width": this.width + "px"},
        {"--dropdown-background-color": this.backgroundColor},
        {"--dropdown-expanded-color": this.backgroundExpandedColor},
        {"--dropdown-border": this.border},
        {"--dropdown-hover-background-color": this.hoverBackgroundColor},
        {"--dropdown-default-text-color": this.textColor},
      ];
    },
  },
  directives: {
    expand: {
      inserted: function (el, binding) {
        if (binding.value !== null) {
          const calcHeight = () => {
            const currentState = el.getAttribute("aria-expanded");
            el.classList.add("u-no-transition");
            el.removeAttribute("aria-expanded");
            el.style.height = null;
            el.style.height = el.clientHeight + "px";
            el.setAttribute("aria-expanded", currentState);

            setTimeout(function () {
              el.classList.remove("u-no-transition");
            });
          }
          el.classList.add("expand");
          el.setAttribute("aria-expanded", binding.value ? "true" : "false");
          calcHeight();
          window.addEventListener("resize", calcHeight);
        }
      },
      update: function (el, binding) {
        if (el.style.height && binding.value !== null) {
          el.setAttribute("aria-expanded", binding.value ? "true" : "false");
        }
      },
    },
  },
  methods: {
    toggleRiskLevels() {
      this.isExpanded = !this.isExpanded;
    },
    setCurrentSelectedOption(option) {
      this.$emit("setSelectedOption", option);
    },
    setConfigData() {
      this.configOptions = this.config.options;
      this.width = this.config.width;
      this.placeholder = this.config.placeholder;
      if (this.config.backgroundColor) {
        this.backgroundColor = this.config.backgroundColor;
      }
      if (this.config.backgroundExpandedColor) {
        this.backgroundExpandedColor = this.config.backgroundExpandedColor;
      }
      if (this.config.border) {
        this.border = this.config.border;
      }
      if (this.config.hoverBackgroundColor) {
        this.hoverBackgroundColor = this.config.hoverBackgroundColor;
      }
      if (this.config.textColor) {
        this.textColor = this.config.textColor;
      }
      if (this.config.borderRadius) {
        this.borderRadius = this.config.borderRadius;
      }
    },
    setOptionsHeight() {
      this.optionsHeight = this.optionHeight * this.configOptions.length;
    },
  },
  created() {
    this.setConfigData();
    this.setOptionsHeight();
  },
  beforeUdate() {
    // this.setOptionsHeight();
  },
  mounted() {
  },
};
</script>

<style lang="scss">
@import "@/assets/Style/SelectOption.scss";
</style>
