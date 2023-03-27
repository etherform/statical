<script lang="ts" setup>
import { useSignInEmailPassword } from '@nhost/vue'
import { logger } from '~/utils/logger'
import { icons } from '~/styles/icons'

const { t } = useI18n()
const user = useUserStore()
const { isLoading, signInEmailPassword } = useSignInEmailPassword()

const email = ref()
const password = ref()

const form = reactive({
  email: '',
  password: '',
  passwordVisible: false,
  // TODO: detect if caps lock is pressed
  passwordTooltip: false,
  isLoading: false,
})

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
  <div w-screen flex flex-col justify-around>
    <div flex flex-1 self-center items-end select-none w-xs>
      <img src="/logo-transp-bg.png" w-sx pointer-events-none mb-5>
    </div>
    <q-form select-none flex flex-col flex-1 self-center w-xs :model="form">
      <div flex pb-2 justify-between text-gray-600 items-center>
        <h5>
          {{ t('labels.login') }}
        </h5>
        <div flex-grow />
        <q-btn-dropdown flat class="dropdown-no-icon" pl-2 pr-2 menu-anchor="top middle" menu-self="bottom middle" :menu-offset="[0, 4]">
          <template #label>
            <q-icon :class="icons.locale" />
          </template>
          <div m-2 flex flex-row>
            <!-- TODO: find a way to parse existing locale names from i18n to avoid using raw string -->
            <q-radio v-model="user.locale" size="xs" val="en" label="English" />
            <q-separator vertical ml-3 mr-1 />
            <q-radio v-model="user.locale" size="xs" val="ru" label="Русский" />
          </div>
        </q-btn-dropdown>
      </div>
      <q-input
        ref="email"
        v-model="form.email"
        class="form-item"
        outlined
        dense
        :placeholder="t('strings_lower.email')"
        type="email"
        tabindex="1"
        autocomplete="on"
        @keyup.enter="handleSignIn"
      >
        <template #prepend>
          <q-icon :class="icons.login" w-4 h-4 />
        </template>
      </q-input>
      <q-input
        ref="password"
        v-model="form.password"
        class="form-item"
        outlined
        dense
        :type="form.passwordVisible ? 'text' : 'password'"
        :placeholder="t('strings_lower.password')"
        tabindex="2"
        autocomplete="on"
        show-password
        @keyup.enter="handleSignIn"
      >
        <template #prepend>
          <q-icon :class="icons.lock" w-4 h-4 />
        </template>
        <template #append>
          <q-icon :class="form.passwordVisible ? icons.eyeClosed : icons.eyeOpen" w-4 h-4 @click="form.passwordVisible = !form.passwordVisible" />
        </template>
        <q-tooltip :model-value="form.passwordTooltip" anchor="center right" self="center left">
          {{ t('tooltips.caps') }}
        </q-tooltip>
      </q-input>

      <q-btn self-end class="form-item" color="primary" :loading="isLoading" type="submit" tabindex="3" @click.prevent="handleSignIn">
        {{ t('buttons.login') }}
      </q-btn>
    </q-form>
    <div flex-1 />
  </div>
</template>

<style lang="scss" scoped>
.form-item {
  margin-top: 0.5rem;
}
</style>

<route lang="yaml">
meta:
  title: titles.login
  layout: empty
  menuIgnore: true
  requiresAuth: false
</route>
