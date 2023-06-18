<Load/>

# Button
The `m-button` component replaces standard HTML buttons with material3 styled buttons.
<br>
MaterialVue contains these types of buttons:
+ filled
+ filled-tonal
+ outlined

## Basic usage
To create filled material button you can simply use `MButton` component

<ExampleUsage
title="Button usage example"
code="<MButton>Label</MButton>">
<MButton>Label</MButton>
</ExampleUsage>

## Button types
MaterialVue supports many types of buttons. Using the `type` prop, you
can create buttons with different styles. `type` prop can be: `filled`,
`outlined`, `filled-tonal`. By default, button is filled.

<ExampleUsage title="Button types example" type="h-gapped"
code='<MButton type="filled">I&#39;m filled</MButton>
<MButton type="filled-tonal">I&#39;m tonal</MButton>
<MButton type="outlined">I&#39;m outlined</MButton>'>
<MButton type="filled">I'm filled</MButton>
<MButton type="filled-tonal">I'm tonal</MButton>
<MButton type="outlined">I'm outlined</MButton>
</ExampleUsage>

## Enabled and disabled buttons
You can easily disable your button component by setting `:enabled` prop to
`false`. By default, button is enabled.

<ExampleUsage title="Enable/Disable button example" type="h-gapped"
code='<MButton type="filled" :enabled="false">I&#39;m filled</MButton>
<MButton type="filled-tonal">I&#39;m tonal</MButton>
<MButton type="outlined">I&#39;m outlined</MButton>'>
<MButton type="filled" :enabled="false">I'm filled</MButton>
<MButton type="filled-tonal" :enabled="false">I'm tonal</MButton>
<MButton type="outlined" :enabled="false">I'm outlined</MButton>
</ExampleUsage>