<template>
  <view class="my-3">
    <uni-grid
      :column="2"
      :square="false"
      :highlight="false"
      :showBorder="false"
      class="text-center"
    >
      <uni-grid-item class="pr-1">
        <view class="bg-yellow-100 rounded-xl flex flex-col justify-between">
          <text>13个</text>
          <text>我的下级代理 ></text>
        </view>
      </uni-grid-item>
      <uni-grid-item class="pl-1">
        <view class="bg-red-100 rounded-xl flex flex-col">
          <text>130个</text>
          <text>我的商户 ></text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>
