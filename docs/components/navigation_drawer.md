<Load/>

# Navigation drawer
Material Navigation drawers provide ergonomic access to destinations in an app.
MaterialVue contains these types of drawers:
+ modal
+ standard

## Basic usage
To create basic material navigation drawer you can use `MNavigationDrawer`
component to create navigation container and use `MNavigationDrawerItem` to init
custom items of navigation

<ExampleUsage height="328px"
title="Navigation drawer usage example"
code='<MNavigationDrawer content_area="#content1" selected="item1">
<template #prepend>
<p class="m-text m-title-medium">Header</p>
</template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content1"></div>'>
<MNavigationDrawer content_area="#content1" selected="item1">
<template #prepend><p class="m-text m-title-medium">Header</p></template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content1"></div>
</ExampleUsage>

## Location

You can change location of the drawer to `right`, or `full`, by using `side` prop.
By default, side is **left**.
<ExampleUsage height="328px"
title="Right-side drawer example"
code='<MNavigationDrawer side="right" content_area="#content1" selected="item1">
<template #prepend><p class="m-text m-title-medium">Header</p></template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content1"></div>'>
<MNavigationDrawer side="right" content_area="#content2" selected="item1">
<template #prepend><p class="m-text m-title-medium">Header</p></template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content2"></div>
</ExampleUsage>



<ExampleUsage height="328px"
title="Full drawer example"
code='<MNavigationDrawer side="full" content_area="#content1" selected="item1">
<template #prepend><p class="m-text m-title-medium">Header</p></template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content1"></div>'>
<MNavigationDrawer side="full" content_area="#content3" selected="item1">
<template #prepend><p class="m-text m-title-medium">Header</p></template>
<MNavigationDrawerItem value="item1" content="Item n.1"/>
<MNavigationDrawerItem value="item2" content="Item n.2"/>
</MNavigationDrawer>
<div id="content3"></div>
</ExampleUsage>

## Items
Inside content of every navigation item you can pass `span` 
with material icon. You can read more about icons [here](../api/icons.md)

<ExampleUsage height="328px"
title="Material icons in items example"
code='<MNavigationDrawer content_area="#content1" selected="item2">
<MNavigationDrawerItem value="item1" content="<span class=&#39;material-symbols-outlined&#39;>apps</span>Apps"/>
<MNavigationDrawerItem value="item2" content="<span class=&#39;material-symbols-outlined&#39;>search</span>Search"/>
</MNavigationDrawer>
<div id="content1"></div>'>
<MNavigationDrawer content_area="#content4" selected="item2">
<MNavigationDrawerItem value="item1" content="<span class='material-symbols-outlined'>apps</span>Apps"/>
<MNavigationDrawerItem value="item2" content="<span class='material-symbols-outlined'>search</span>Search"/>
</MNavigationDrawer>
<div id="content4"></div>
</ExampleUsage>

## Modal

Using the `modal` prop, you can change the type of the drawer. Modal `prop`
is Boolean. By default, it is false. 
<br>
But when you setup drawer as modal, the drawer navigation will be invisible.
To open/close navigation you can use `openNav`, `closeNav` functions

<ExampleUsage height="328px"
title="Modal navigation drawer example"
code='<MNavigationDrawer ref="drawer" :modal="true" content_area="#content1">
</MNavigationDrawer>
<div id="content1" @click="this.$refs.drawer.openNav()">
<p class="m-text m-display-small">Click me</p>
</div>'>
<MNavigationDrawer ref="drawer" :modal="true" content_area="#content5">
</MNavigationDrawer>
<div id="content5" style="height: 100%; display: flex; align-items: center; justify-content: center; cursor: pointer" @click="this.$refs.drawer.openNav()">
<p class="m-text m-display-small">Click me</p>
</div>
</ExampleUsage>
