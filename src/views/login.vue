<script lang="ts" setup>
import { useSignInEmailPassword } from '@nhost/vue'
import { logger } from '~/utils/logger'
import { icons } from '~/styles/icons'

const { t } = useI18n()
const user = useUserStore()
const locale = useLocaleStore()
const { isLoading, signInEmailPassword } = useSignInEmailPassword()

const email = ref()
const password = ref()

const form = reactive({
  email: '',
  password: '',
  passwordTooltip: false,
  isLoading: false,
  selectedLocale: locale.elementLocaleArray.findIndex(e => e.name === user.locale),
})

watch(
  () => form.selectedLocale,
  () => user.locale = locale.elementLocaleArray[form.selectedLocale].name,
  { immediate: true },
)

// maybe this could be done with i18n by referencing strings from different locales
const locales = {
  ru: 'Русский',
  en: 'English',
}

const handleSignIn = async () => {
  const { error } = await signInEmailPassword(form.email, form.password)
  if (error)
    logger.error(`Sign-in failed: ${error.message}`)
}

onMounted(() => {
  email.value.focus()
})
</script>

<template>
  <el-container h-full bg-gray-100 pointer-events-none>
    <el-header w-full />
    <el-main w-full flex-grow flex justify-center items-start>
      <el-form :model="form" autocomplete="on" w-sm size="large" pt-16 select-none pointer-events-auto>
        <img src="/logo-transp-bg.png" w-sm pointer-events-none>
        <div flex pb-4 w-full justify-between text-gray-600>
          <h1 pointer-events-none text-2xl>
            {{ t('labels.login') }}
          </h1>
          <div />
          <el-dropdown text-bluegray-600 trigger="click" placement="top" size="small">
            <el-icon :class="icons.locale" icon-btn-6 />
            <template #dropdown>
              <el-dropdown-menu class="no-select">
                <el-radio-group v-model="form.selectedLocale">
                  <el-dropdown-item>
                    <el-radio :label="0" size="small">
                      {{ locales.en }}
                    </el-radio>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <el-radio :label="1" size="small">
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
            ref="email"
            v-model="form.email"
            :placeholder="t('strings_lower.email')"
            type="text"
            tabindex="1"
            autocomplete="on"
            @keyup.enter="handleSignIn"
          >
            <template #prefix>
              <el-icon :class="icons.login" w-4 h-4 />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-tooltip :disabled="!form.passwordTooltip" :content="t('tooltips.caps')" placement="right" manual>
            <el-input
              ref="password"
              v-model="form.password"
              type="password"
              :placeholder="t('strings_lower.password')"
              tabindex="2"
              autocomplete="on"
              show-password
              @keyup.enter="handleSignIn"
            >
              <template #prefix>
                <el-icon :class="icons.lock" w-4 h-4 />
              </template>
            </el-input>
          </el-tooltip>
        </el-form-item>
        <el-form-item>
          <el-button w-full :loading="isLoading" type="primary" tabindex="3" @click="handleSignIn">
            {{ t('buttons.login') }}
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer w-screen />
  </el-container>
</template>

<style lang="scss" scoped>

</style>

<route lang="yaml">
meta:
  title: titles.login
  layout: empty
  menuIgnore: true
  requiresAuth: false
</route>
