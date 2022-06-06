import {
  DefinePlugin,
  SchemaProperty,
  StarterPlugin,
  LifecycleEvents,
} from 'koishi-thirdeye'

export class MyPluginConfig {
  @SchemaProperty({ default: 'dress', description: "description dress" })
  commandName: string
}

@DefinePlugin()
export default class MyPlugin extends StarterPlugin(MyPluginConfig) implements LifecycleEvents {
  onApply() {
    // 该方法会在插件加载时调用，用于在上下文中注册事件等操作。
  }
}