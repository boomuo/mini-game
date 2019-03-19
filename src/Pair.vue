<template>
  <div :class="['pair-wrapper', itemname]">
    <Container 
      class="container items"
      :group-name="itemname" 
      orientation="horizontal"
      :get-child-payload="payload" 
      @drop="onDrop('items', $event)" 
      :drop-class="ASDASD"
    >
      <Draggable v-for="item in items" :key="item.name" class="item">
        <img :src="item.src" :title="item.name">
      </Draggable>
    </Container>

    <Container 
      :style="target_style"
      class="container target"
      :group-name="itemname" 
      orientation="horizontal"
      :get-child-payload="payload_target" 
      @drop="onDrop('items_target', $event)" 
    >
      <Draggable v-for="item in items_target" :key="item.name" class="item">
        <img :src="item.src" :title="item.name">
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, getItem, getTargetImg } from "./utils/helpers";
export default {
  name: "Pair",
  components: { Container, Draggable },
  props: ['itemname'],
  data() {
    return {
      items: getItem(this.itemname),
      items_target: [],
      target_style: getTargetImg(this.itemname),
    };
  },
  methods: {
    payload (index) {
      console.log('payload');
      return this.items[index]
    },
    payload_target (index) {
      console.log('payload_target');
      return this.items_target[index]
    },
    onDrop (collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult);
    },
  }
};
</script>

<style>
.container{
  min-height: 150px;
  min-width: 150px;
  position: relative;
  /*border: solid 1px;*/
  margin: 5px;
  display: inline-flex;
}
.container .item{
  width: 150px;
  height: 150px !important;
}
.items{

}
img{
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  margin: auto;
}
.target{
  /* IE */
  filter: progid:DXImageTransform.Microsoft.BasicImage(brightness=0);

  /* Chrome, Safari */
  -webkit-filter: brightness(0);

  /* Firefox */
  filter: brightness(0);
}
.target .item {
  filter: progid:DXImageTransform.Microsoft.BasicImage(brightness=1);
  -webkit-filter: brightness(1);
  filter: brightness(1);
}
</style>
