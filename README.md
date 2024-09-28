# ditta

Colophon used for all ditta projects.

### Install

```
npm i @ditta/colophon
```

### Setup

**Nuxt**
Create a `plugins/ditta.client.ts` file. Nuxt will automatically pick it up.

```typescript
import ditta from '@ditta/colophon'

export default defineNuxtPlugin((_nuxtApp) => {
  ditta()
})
```

**Vanilla JS/TS**
Anywhere in your code:

```typescript
import ditta from '@ditta/colophon'

ditta()
```

### Tooling

Uses `https://github.com/antfu/eslint-config` for linting. Make sure to apply the VSCode settings from there to get the best experience.
