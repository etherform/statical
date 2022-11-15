<script lang="ts" setup>
import { ElMessage as message } from 'element-plus/es'
import { icons } from '~/styles/icons'

const { t } = useI18n()
const user = useUserStore()

const form = reactive({
  email: '',
  password: '',
  capsTooltip: false,
  loading: false,
})

const signIn = async () => {
  form.loading = true
  const error = await user.signIn(form.email, form.password)
  if (error)
    message.error(error.message)
  form.loading = false
}
</script>

<template>
  <el-container h-screen bg-bluegray-700>
    <el-header w-screen />
    <el-main w-screen flex-grow flex justify-center items-start>
      <el-form :model="form" autocomplete="on" w-sm size="large" pt-16>
        <img src="/logo-transp-bg.png" w-sm>
        <el-form-item>
          <div pointer-events-none select-none text-xl text-gray-200>
            {{ t('labels.login') }}
          </div>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="form.email" :placeholder="t('strings.email')" type="text" tabindex="1" autocomplete="on" @keyup.enter="signIn">
            <template #prefix>
              <div :class="icons.login" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-tooltip :disabled="!form.capsTooltip" :content="t('tooltips.caps')" placement="right" manual>
            <el-input v-model="form.password" type="password" :placeholder="t('strings.password')" tabindex="2" autocomplete="on" show-password @keyup.enter="signIn">
              <template #prefix>
                <div :class="icons.password" />
              </template>
            </el-input>
          </el-tooltip>
        </el-form-item>
        <el-form-item>
          <el-button w-screen :loading="form.loading" type="primary" tabindex="3" @click="signIn">
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
      -webkit-appearance: none;
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
