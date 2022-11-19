<script lang="ts" setup>
import { useSignInEmailPassword } from '@nhost/vue'
import { tryOnMounted } from '@vueuse/core'
import { icons } from '~/styles/icons'
import { toast } from '~/utils/toasts'

const { t } = useI18n()
const { isLoading, signInEmailPassword } = useSignInEmailPassword()
const userStore = useUserStore()

const form = reactive({
  email: '',
  password: '',
  passwordTooltip: false,
  isLoading,
})

const selectedLocale = ref(0)

// maybe this could be done with i18n by referencing strings from different locales
const locales = {
  ru: 'Русский',
  en: 'English',
}

const handleSignIn = async () => {
  const { isError, error } = await signInEmailPassword(form.email, form.password)

  if (isError)
    toast.error(`${t('messages.login_fail')} ${t('strings_capital.error')}: ${error?.message}`)
}

watchEffect(() => userStore.setLocaleById(selectedLocale.value))

tryOnMounted(() =>
  selectedLocale.value = userStore.locale.elementArray.findIndex((i) => i.name === userStore.locale.string),
)
</script>

<template>
  <el-container h-screen bg-bluegray-700>
    <el-header w-screen />
    <el-main w-screen flex-grow flex justify-center items-start>
      <el-form :model="form" autocomplete="on" w-sm size="large" pt-16>
        <img src="/logo-transp-bg.png" w-sm>
        <div flex pb-4 pl-1 pr-1 w-full text-gray-200 justify-between>
          <h1 pointer-events-none select-none text-2xl>
            {{ t('labels.login') }}
          </h1>
          <div />
          <el-dropdown text-gray-200 trigger="click" placement="top" size="small">
            <div :class="icons.locale" text-2xl class="hvr-grow" />
            <template #dropdown>
              <el-dropdown-menu class="no-select">
                <!-- <el-dropdown-item :icon="icons.locale">
                  Профиль
                </el-dropdown-item>
                <el-dropdown-item>
                  Выйти
                </el-dropdown-item> -->
                <el-radio-group v-model="selectedLocale">
                  <el-dropdown-item>
                    <el-radio :label="0" border size="small">
                      {{ locales.en }}
                    </el-radio>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-radio :label="1" border size="small">
                      {{ locales.ru }}
                    </el-radio>
                  </el-dropdown-item>
                </el-radio-group>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <el-form-item prop="username">
          <el-input
            v-model="form.email"
            :placeholder="t('strings_lower.email')"
            type="text"
            tabindex="1"
            autocomplete="on"
            @keyup.enter="handleSignIn"
          >
            <template #prefix>
              <div :class="icons.login" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-tooltip :disabled="!form.passwordTooltip" :content="t('tooltips.caps')" placement="right" manual>
            <el-input
              v-model="form.password"
              type="password"
              :placeholder="t('strings_lower.password')"
              tabindex="2"
              autocomplete="on"
              show-password
              @keyup.enter="handleSignIn"
            >
              <template #prefix>
                <div :class="icons.password" />
              </template>
            </el-input>
          </el-tooltip>
        </el-form-item>
        <el-form-item>
          <el-button w-screen :loading="form.isLoading" type="primary" tabindex="3" @click="handleSignIn">
            {{ t('buttons.login') }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer w-screen />
  </el-container>
</template>

<style lang="scss" scoped>
:deep(.el-input){
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
  color: #454545;

  .el-input__wrapper {
    background: transparent;
    box-shadow: none;

    input {
      color: #eee;
      caret-color: var(--el-color-white);
      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px #283443 inset !important;
        -webkit-text-fill-color: var(--el-color-white) !important;
      }
    }
  }
}

/* :deep(.el-form-item) {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
  color: #454545;
  .el-form-item__content {
    display: inline-flex;
  }
  .el-input {
    width: 85%;
    height: 100%;
    input {
      padding: 12px 5px 12px 15px;
      color: #eee;
      -webkit-appearance: none;
      caret-color: #fff;
      &:-webkit-autofill {
        box-shadow: 0 0 0 1000px #283443 inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
} */
</style>

<route lang="yaml">
meta:
  title: titles.login
  layout: empty
  requiresAuth: false
</route>
