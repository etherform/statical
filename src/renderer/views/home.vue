<script lang="ts" setup>
const supa = useSupabase()
const user = useUserStore()

const handle = async () => {
  const { data: users, error } = await supa
    .from('users')
    .select(`
      id,
      email,
      user_roles (
        roles (
          role
        )
      )
    `)
  /* users[0].roles[0] */
  /* .eq('user_id', user.id) */
  console.log(JSON.stringify(users, null, 2))
}
</script>

<template>
  <div>
    <div class="i-mdi-alarm text-orange-400" />
    <h3>Forever Empty Dashboard.</h3>
  </div>
  <div>
    <el-button type="primary" @click="handle">
      Change Icon
    </el-button>
  </div>
</template>

<route lang="yaml">
meta:
  title: titles.home
</route>
