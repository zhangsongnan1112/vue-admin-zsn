 <!-- @change="item.change" -->
 <template>
  <div>
    <div class="db-checkbox-beauty" v-for="(item,key,i) in formData" :key="i">
      <template v-if="item.type=='select'">
        <span>{{item.label}}</span>
         <el-select
          v-model="formData.value[key]"
          size="mini"
          @change="item.changeEvent"
        >
          <el-option
            v-for="it in item.list"
            :key="it.code"
            :label="it.name"
            :value="it.code"
          />
        </el-select>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    formData: {
      type: Object,
      require: true
    }
  },
  methods: {
    add () {
      alert(1111)
    }
  }
}
</script>
