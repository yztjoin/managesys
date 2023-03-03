<template>
  <div class="arg">
    <Divider title="协议主体" index="1"></Divider>
    <el-form
      ref="ruleFormRef"
      :model="bodyFrom"
      :rules="rules"
      label-width="80px"
    >
      <div class="arg-body">
        <div class="arg-body-1">
          <div class="arg-body-1-left">
            <el-form-item label="协议客户" prop="region">
              <el-select v-model="bodyFrom.region" placeholder="选择客户">
                <el-option label="客户1" value="region1" />
                <el-option label="客户2" value="region2" />
              </el-select>
            </el-form-item>
            <span v-if="bodyFrom.region">{{ bodyFrom.region }}</span>
          </div>
          <el-form-item label="协议状态">
            <el-select v-model="bodyFrom.state">
              <el-option label="正常" value="state1" />
              <el-option label="异常" value="state2" />
            </el-select>
          </el-form-item>
        </div>
        <div class="arg-body-1">
          <div class="arg-body-1-left">
            <el-form-item label="购进指标">
              <el-select v-model="bodyFrom.quota" placeholder="选择客户">
                <el-option label="指标1" value="quota1" />
                <el-option label="指标2" value="quota2" />
              </el-select>
            </el-form-item>
            <el-input
              :style="{ width: '150px', marginLeft: '10px' }"
              v-model="bodyFrom.num1"
              placeholder="输入金额/数量"
            />
          </div>
          <div class="arg-body-1-right">
            <el-form-item label="纯销指标">
              <el-select v-model="bodyFrom.purequota">
                <el-option label="金额" value="purequota1" />
              </el-select>
            </el-form-item>
            <el-input
              :style="{ width: '150px', marginLeft: '10px' }"
              v-model="bodyFrom.num2"
              placeholder="输入金额/数量"
            />
          </div>
        </div>
        <div class="arg-body-1">
          <div class="arg-body-1-left">
            <el-form-item label="销售区域">
              <el-button>选择区域</el-button>
            </el-form-item>
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              class="mx-1"
              closable
              :type="tag.type"
            >
              {{ tag.name }}
            </el-tag>
          </div>
          <div class="arg-body-1-right">
            <el-form-item label="签订时间">
              <el-date-picker
                v-model="bodyFrom.time"
                type="datetime"
                placeholder="选择时间"
              />
            </el-form-item>
          </div>
        </div>
        <div class="arg-body-1">
          <div class="arg-body-1-left">
            <el-form-item label="指定渠道">
              <el-select v-model="bodyFrom.channel" placeholder="指定渠道">
                <el-option label="渠道1" value="channel1" />
                <el-option label="渠道2" value="channel2" />
              </el-select>
            </el-form-item>
            <el-button style="margin-left: 10px">请选择渠道</el-button>
          </div>
        </div>
        <div class="arg-body-tb">
          <el-table :data="tableData" height="250" style="width: 100%">
            <el-table-column prop="code" label="指定渠道编码" />
            <el-table-column prop="name" label="指定渠道名称" />
            <el-table-column prop="address" label="所在省" />
          </el-table>
        </div>
      </div>
    </el-form>
    <Divider title="产品政策" index="2"></Divider>
    <div class="arg-policy">
      <div class="arg-policy-m1">
        <el-button type="primary" @click="policyNum++">添加产品</el-button>
        <span>购物指标（万元）:￥15.255</span>
        <span
          >安标按季度分解（万元）:{{
            quarterly
              .map((value, index) => {
                return `  【Q${index + 1}】 ￥${value}`
              })
              .join('，')
          }}</span
        >
        <span>纯销总指标（万元）：￥154.54</span>
      </div>
      <div class="arg-policy-m2">
        <div v-for="i in policyNum" :key="i">
          <div class="arg-policy-m2-1">
            <span>产品：</span>
            <el-button>选择产品</el-button>
            <a href="javascript:void(0);">美复胶丸 24粒/盒</a>
            <el-form-item label="协议效期">
              <el-date-picker
                v-model="policyFrom.time"
                type="datetime"
                placeholder="选择时间"
              />
            </el-form-item>
            <el-button
              type="warning"
              class="arg-policy-m2-1-delate"
              @click="policyNum--"
              >删除</el-button
            >
          </div>
          <div class="arg-policy-m2-2">
            <div class="arg-policy-m2-2-box">
              <el-row class="box-el-row">
                <el-col class="el-row-col" :span="3">协议价（元）</el-col>
                <el-col class="el-row-col" :span="3">折票（元）</el-col>
                <el-col class="el-row-col" :span="3"
                  >购进指标量（大单位）</el-col
                >
                <el-col class="el-row-col" :span="3"
                  >购进指标量（小单位）</el-col
                >
                <el-col class="el-row-col" :span="4">购进金额（万元）</el-col>
                <el-col class="el-row-col" :span="4"
                  >纯销指标量（小单位）</el-col
                >
                <el-col class="el-row-col" :span="4"
                  >纯销指标金额（万元）</el-col
                >
              </el-row>
              <el-row class="box-el-row2">
                <el-col class="el-row-col" :span="3">
                  <el-input v-model="policyFrom.num11" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="3">
                  <el-input v-model="policyFrom.num22" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="3">
                  <el-input v-model="policyFrom.num33" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="3">
                  <el-input v-model="policyFrom.num44" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="4">
                  <el-input v-model="policyFrom.num55" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="4">
                  <el-input v-model="policyFrom.num66" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="4">
                  <el-input v-model="policyFrom.num77" placeholder="请输入"
                /></el-col>
              </el-row>
            </div>
            <div class="arg-policy-m2-2-box">
              <el-row class="box-el-row">
                <el-col class="el-row-col" :span="3">协议价（元）</el-col>
                <el-col class="el-row-col" :span="3">折票（元）</el-col>
                <el-col class="el-row-col" :span="3"
                  >购进指标量（大单位）</el-col
                >
                <el-col class="el-row-col" :span="3"
                  >购进指标量（小单位）</el-col
                >
                <el-col class="el-row-col" :span="4">购进金额（万元）</el-col>
                <el-col class="el-row-col" :span="4"
                  >纯销指标量（小单位）</el-col
                >
                <el-col class="el-row-col" :span="4"
                  >纯销指标金额（万元）</el-col
                >
              </el-row>
              <el-row class="box-el-row2">
                <el-col class="el-row-col" :span="3">
                  <el-input v-model="policyFrom.num1" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="3">
                  <el-input v-model="policyFrom.num2" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="3">
                  <el-input v-model="policyFrom.num3" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="3">
                  <el-input v-model="policyFrom.num4" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="4">
                  <el-input v-model="policyFrom.num5" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="4">
                  <el-input v-model="policyFrom.num6" placeholder="请输入"
                /></el-col>
                <el-col class="el-row-col" :span="4">
                  <el-input v-model="policyFrom.num7" placeholder="请输入"
                /></el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Divider title="补充协议" index="2"></Divider>
    <div class="arg-ex">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="补充协议1" name="first"></el-tab-pane>
        <el-tab-pane label="补充协议2" name="second"></el-tab-pane>
        <el-tab-pane label="补充协议3" name="third"></el-tab-pane>
        <el-tab-pane label="补充协议4" name="fourth"></el-tab-pane>
      </el-tabs>
      <div class="arg-ex-body">
        <p>协议内容：</p>
        <div>
          <el-input
            style="height: 100%"
            class="textarea"
            v-model="policyFrom.textarea"
            placeholder=""
            resize="none"
            type="textarea"
          />
        </div>
      </div>
    </div>
    <div class="grg-food">
      <el-button type="primary" @click="submit">保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
}
</script>
<script setup>
import Divider from '../components/divider.vue'
import { reactive, ref } from 'vue'
const activeName = ref('first')
const policyNum = ref(1)
const tableData = [
  {
    code: 'BJ000680',
    name: '宁波青青子衿有限公司',
    address: 'No maker',
  },
  {
    code: 'BJ000680',
    name: '宁波悠悠我心有限公司',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    code: 'BJ000644',
    name: '宁波但为君故有限公司',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    code: 'BJ000680',
    name: '宁波沉吟至今有限公司',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const tags = ref([{ name: '全国', type: '' }])
const quarterly = reactive(['12.5', '15.1', '18,3', '12.8'])
const bodyFrom = reactive({
  region: 'region1',
  state: 'state1',
  quota: 'quota1',
  purequota: 'purequota1',
  num1: 1,
  num2: 2,
  channel: '',
  time: '',
})
const policyFrom = reactive({
  num1: 1,
  num2: 2,
  num3: 3,
  num4: 4,
  num5: 5,
  num6: 6,
  num7: 7,
  num11: 1,
  num22: 2,
  num33: 3,
  num44: 4,
  num55: 5,
  num66: 6,
  num77: 7,
  textarea: '',
  time: '',
})
const rules = reactive({
  region: [{ required: true, message: '请填写名字', trigger: 'blur' }],
})

function handleClick(value) {
  console.log(value)
}
function submit() {
  console.log(bodyFrom)
  console.log(policyFrom)
}
</script>
<style lang="less">
.arg {
  .el-form-item {
    margin-bottom: 0px;
  }
  .el-tabs__header {
    margin-bottom: 0px;
  }
  .arg-ex-body {
    textarea {
      width: 100%;
      height: 100% !important;
      background: rgb(248, 248, 248);
    }
  }
}
</style>
<style lang="less" scoped>
.arg {
  position: relative;
  font-size: 14px;
  padding: 0 20px;
  padding-bottom: 60px;
  .arg-body {
    box-sizing: border-box;
    padding: 10px 15px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    .arg-body-tb {
      padding-left: 56px;
    }
    .arg-body-1 {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      & > div {
        flex: 1;
      }
      .arg-body-1-left,
      .arg-body-1-right {
        display: flex;
        align-items: center;
        span {
          margin-left: 15px;
        }
      }
    }
  }
  .arg-policy {
    width: 100%;
    border-radius: 10px;
    .arg-policy-m1 {
      span {
        margin-left: 25px;
      }
    }
    .arg-policy-m2 {
      margin-top: 15px;
      background: #fff;
      border-radius: 20px;

      .arg-policy-m2-1 {
        display: flex;
        align-items: center;
        padding: 15px 30px;
        position: relative;
        border-bottom: 1px solid #eae8e8;
        a {
          margin-left: 15px;
          margin-right: 70px;
        }
        .arg-policy-m2-1-delate {
          position: absolute;
          right: 20px;
        }
      }
      .arg-policy-m2-2 {
        padding: 10px;
        .arg-policy-m2-2-box {
          border: 1px solid #ccc;
          margin-bottom: 10px;
          border-radius: 5px;
          .box-el-row {
            background: rgb(248, 248, 248);
            border-radius: 5px;
            &2 .el-row-col {
              padding: 10px 15px;
            }
            .el-row-col {
              padding: 10px 15px;
            }
          }
        }
      }
    }
  }
  .arg-ex {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    .arg-ex-body {
      border: 1px solid #ededed;
      height: 200px;
      padding: 10px 15px;
      box-sizing: border-box;
      border-top: none;
      p {
        font-weight: bold;
      }
      & > div {
        // border: 1px solid #ededed;
        height: 80%;
        width: 100%;
        margin-top: 10px;
      }
    }
  }
  .grg-food {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 50px;
    background: #fff;
    padding: 10px 20px;
    box-sizing: border-box;
  }
}
</style>
