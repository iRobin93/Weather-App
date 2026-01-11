// -------------------------------
// Settings Component
// -------------------------------
import { Translations } from "../translations.js"
export const SettingComponent = {
    props: { contentBlock: Object},
    emits: ["update:contentBlock", "save", "cancel"],
    data() { return { localContent: { ...this.contentBlock.properties } } },
    template: `
<div class="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-xl space-y-4 text-white">
    <h2 class="text-lg font-semibold">{{ localContent.texts.settings }}</h2>

    <div>
        <label class="block mb-1">{{ localContent.texts.location }}:</label>
        <input type="text" v-model="localContent.location" class="w-full p-2 rounded bg-gray-800 text-white"/>
    </div>

<div>
  <label class="block mb-1">{{ localContent.texts.appBackgroundColor }}:</label>
  <input type="color" v-model="localContent.appBackgroundColor" />
</div>

<div>
  <label class="block mb-1">{{ localContent.texts.cardBackgroundColor }}:</label>
  <input type="color" v-model="localContent.cardBackgroundColor" />
</div>


    <div>
        <label class="block mb-1">{{ localContent.texts.textColor }}:</label>
        <input type="color" v-model="localContent.textColor"/>
    </div>

    <div>
        <label class="block mb-1">{{ localContent.texts.language }}:</label>
        <select v-model="localContent.language" class="w-full p-2 rounded bg-gray-800 text-white">
            <option value="en-EN">{{ localContent.texts.english }}</option>
            <option value="nb-NO">{{ localContent.texts.norwegian }}</option>
        </select>
    </div>

    <div>
        <label class="block mb-1">{{ localContent.texts.days }}:</label>
        <input type="number" v-model.number="localContent.showDays" min="1" max="7" class="w-full p-2 rounded bg-gray-800 text-white"/>
    </div>

    <div class="flex items-center space-x-2">
        <label>{{ localContent.texts.celsius }}:</label>
        <input type="checkbox" v-model="localContent.showCelcius"/>
    </div>

    <div class="flex justify-end space-x-2 mt-4">
        <button @click="cancelSettings" class="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded shadow text-white font-semibold transition">
            ✖ {{ localContent.texts.cancel }}
        </button>
        <button @click="saveSettings" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded shadow text-white font-semibold transition">
            💾 {{ localContent.texts.save }}
        </button>
    </div>
</div>
`,
    methods: {
        saveSettings() {
            const updated = {
                ...this.localContent,
                texts: new Translations(this.localContent.language).texts
            };
            this.$emit("update:contentBlock", { properties: updated });
            this.$emit("save");
        },
        cancelSettings() {
            this.localContent = { ...this.contentBlock.properties };
            this.$emit("cancel");
        }
    }
};