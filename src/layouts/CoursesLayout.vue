<template>
  <div>
    <header class="header">
      <div class="wrapper">
        <router-link to="/" class="header-logo">
          <p class="header-logo__title">LETI</p>
          <p class="header-logo__subtitle">Web Lab</p>
        </router-link>

        <label class="header-search">
          <input type="text" class="header-search__input">
          <svg-sprite
            class="header-search__icon"
            symbol="search"
            width="16"
            height="16"
          />
        </label>

        <button type="button" class="header-user">
          <svg-sprite
            class="header-user__icon"
            symbol="user"
            width="25"
            height="25"
          />
          <p class="header-user__text">
            Студент: Щербаков А. А.
          </p>
        </button>

        <button type="button" class="header-auth">
          <p class="header-auth__text">
            Выйти
          </p>
          <svg-sprite
            class="header-auth__icon"
            symbol="logout"
            width="25"
            height="30"
          />
        </button>
      </div>
    </header>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CoursesLayout'
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 90px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  background: blue;
  color: #fff;
  white-space: nowrap;

  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: $max-page-width;
    margin: 0 auto;
  }

  &-logo {
    display: grid;
    grid-template-columns: auto auto;
    align-items: end;
    gap: 4px;
    margin-right: 10%;

    &__title {
      font-size: 40px;
      font-weight: 700;
      line-height: 34px;
    }

    &__subtitle {
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
    }
  }

  &-search {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 370px;
    margin-left: auto;
    margin-right: 10%;

    &__input {
      padding: 0 calc(20px + 16px) 0 12px;
      width: 100%;
      background: #ffffff50;
      color: #fff;
      border-radius: 14px;
      line-height: 26px;
    }

    &__icon {
      position: absolute;
      right: 12px;
      top: 5px;
    }
  }

  &-user {
    display: grid;
    grid-template-columns: auto auto;
    gap: 5px;
    align-items: center;
    margin-right: 40px;
    background: transparent;
    color: #fff;
  }

  &-auth {
    display: grid;
    grid-template-columns: auto auto;
    gap: 9px;
    align-items: center;
    background: transparent;
    color: #fff;
  }
}
</style>
