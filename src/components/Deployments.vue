<template>
<div>
  <div>
      <table class="table tableright">
        <tr>
          <th>Host</th>
          <th>Name</th>
          <th>Image</th>
          <th>Port</th>
          <th>IP</th>
        </tr>
        <tr :key='item.name' v-for="item in items">
          <td>{{item.host}}</td>
          <td>{{item.name}}</td>
          <td>{{item.image}}</td>
          <td>{{item.port}}</td>
          <td>{{item.ip}}</td>
        </tr>
      </table>
  </div>
</div>
</template>

<script>
export default {
  name: 'Deployments',
  data () {
    return {
      items: []
    }
  },
  created () {
    const data = {
      service: 'go.receptacle.server',
      method: 'Tasks.List',
      request: {}
    }

    const endpoint = 'http://localhost:8080/rpc'

    this.$http.post(endpoint, data).then(response => {
      this.items = response.data.list
    }, response => {
      console.log(response)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
