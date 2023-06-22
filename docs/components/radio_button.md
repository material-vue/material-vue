<Load/>

# Radio button
Radio buttons allow users to select one option from a set

## Basic usage
In usual case, you should use `m-radio-group` and `m-radio` inside. 
Because, this combination, provide you
[single-select principle](https://m3.material.io/components/radio-button/guidelines#54e79e34-9c44-45e9-be76-94db678c87da) out of the box.

<ExampleUsage title="Radio button basic example"
code='<m-radio-group selected="option1">
<m-radio-button value="option1">
<template #label>
This is item 1
</template>
</m-radio-button>
<m-radio-button value="option2">
<template #label>
This is item 2
</template>
</m-radio-button>
</m-radio-group>'>
<m-radio-group selected="option1">
<m-radio-button value="option1">
<template #label>
This is item 1
</template>
</m-radio-button>
<m-radio-button value="option2">
<template #label>
This is item 2
</template>
</m-radio-button>
</m-radio-group>
</ExampleUsage>

## Changing state
<ExampleUsage title="Change state using radio refs">
<MButton type="filled-tonal" @click="this.$refs.apple_option.setChecked(true)">Apple!</MButton>
<m-radio-group selected="orange">
<m-radio-button value="apple" ref="apple_option">
<template #label>
Apple
</template>
</m-radio-button>
<m-radio-button value="orange">
<template #label>
Orange
</template>
</m-radio-button>
</m-radio-group>
</ExampleUsage>


<ExampleUsage title="Change state using radio group refs">
<MButton type="filled-tonal" @click="this.$refs.group1.selectOption('yes')">Yeeeah!</MButton>
<m-radio-group ref="group1">
<m-radio-button value="yes">
<template #label>
Yes
</template>
</m-radio-button>
<m-radio-button value="nope">
<template #label>
Nope
</template>
</m-radio-button>
</m-radio-group>
</ExampleUsage>

## Examples

<ExampleUsage title="Choose option with reset">

<MButton @click="this.$refs.color_select.selectOption(null); this.$refs.btn.$el.style.backgroundColor=''" type="filled-tonal" ref="btn">Reset</MButton>
<m-radio-group ref="color_select">
<m-radio-button value="green" @click="this.$refs.btn.$el.style.backgroundColor='#3EB448'">
<template #label>
Green
</template>
</m-radio-button>
<m-radio-button value="violet" @click="this.$refs.btn.$el.style.backgroundColor='#A65CB4'">
<template #label>
Violet
</template>
</m-radio-button>
</m-radio-group>
</ExampleUsage>