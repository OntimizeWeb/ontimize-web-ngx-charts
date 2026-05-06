# Migration Status — ontimize-web-ngx-charts

Migración incremental Angular 15 → 18. Cada fase se publica en su propia rama para permitir revisión independiente.

## Ramas

| Rama | Angular | Estado | Commit |
|------|---------|--------|--------|
| `15.x.x` | 15 | ✅ Base (intocable) | — |
| `migration/16.x.x` | 16 | ✅ Completada | `13f151c` |
| `migration/17.x.x` | 17 | ✅ Completada | `c33a1ce` |
| `migration/18.x.x` | 18 | ✅ Completada | `fba2d70` |
| `18.x.x` | 18 | ✅ Rama destino (copia de 15.x.x) | — |

---

## Fase 1 — Angular 15 → 16 (`migration/16.x.x`)

- Bump de todas las dependencias Angular a `^16.2.0`
- `ng-packagr ^16.2.0`, `typescript ~5.1.6`, `zone.js ~0.13.0`
- `@angular-eslint/*` → `16.3.1`
- `@angular/flex-layout` sustituido por alias npm `@ngbracket/ngx-layout@^16.0.0`
- `ontimize-web-ngx` → `^16.0.0`
- Peer dependency en `projects/package.json` actualizada a `^16.0.0`

---

## Fase 2 — Angular 16 → 17 (`migration/17.x.x`)

- Bump de todas las dependencias Angular a `^17.3.0`
- `ng-packagr ^17.3.0`, `typescript ~5.2.2`, `zone.js ~0.14.0`
- `@angular-eslint/*` → `17.5.3`
- `ontimize-web-ngx` → `^17.0.0`
- Peer dependency en `projects/package.json` actualizada a `^17.0.0`

---

## Fase 3 — Angular 17 → 18 (`migration/18.x.x`)

### Dependencias
- Bump de todas las dependencias Angular a `^18.2.0`
- `ng-packagr ^18.2.0`, `typescript ~5.5.4`
- `@angular-eslint/*` → `18.3.1`
- `@angular/flex-layout` / `@ngbracket/ngx-layout` **eliminados**
- `luxon ^3.4.0` + `@types/luxon ^3.4.0` añadidos como devDeps (peer transitivo de `ngx-material-timepicker` del framework)
- `ontimize-web-ngx` → `file:../ontimize-web-ngx/dist/ontimize-web-ngx-18.0.0-SNAPSHOT-0.tgz`
- Peer dependency en `projects/package.json` actualizada a `^18.0.0`

### Templates — eliminación de flex-layout y control flow

Los 4 templates con directivas `fxLayout`/`fxFlex`/`fxFlexFill`/`fxLayoutAlign` han sido migrados a clases CSS utilitarias `o-flex-*` del framework y a la nueva sintaxis de control flow de Angular 17+:

| Template | Cambios |
|----------|---------|
| `o-chart.component.html` | `fxFlexFill` → `class="o-flex-fill"` · `*ngIf` → `@if` · `[ngSwitch]`/`*ngSwitchCase` → `@switch`/`@case` |
| `o-chart-on-demand.component.html` | 13 directivas fxLayout/fxFlex → clases o-flex-* + `style="gap:Xpx"` · `*ngIf` → `@if` · `*ngFor` → `@for` |
| `load-preferences-dialog.component.html` | `fxLayout="column"` → `class="o-flex-column"` · `*ngIf` → `@if` · `*ngFor` → `@for` |
| `save-preferences-dialog.component.html` | `fxLayout="column"` → `class="o-flex-column"` |

### Standalone migration

Los 4 componentes han sido convertidos a `standalone: true`:

| Componente | Imports añadidos al decorador |
|------------|-------------------------------|
| `OChartComponent` | `NgClass`, `NgTemplateOutlet`, `NgxChartsModule` |
| `OChartOnDemandComponent` | `NgClass`, `FormsModule`, `MatDialogModule`, `MatButtonModule`, `MatFormFieldModule`, `MatInputModule`, `MatIconModule`, `MatMenuModule`, `MatRadioModule`, `MatSelectModule`, `MatSidenavModule`, `MatTooltipModule`, `OntimizeWebModule`, `OChartComponent` |
| `SavePreferencesDialogComponent` | `MatDialogModule`, `MatFormFieldModule`, `MatInputModule`, `MatButtonModule`, `ReactiveFormsModule`, `OntimizeWebModule` |
| `LoadPreferencesDialogComponent` | `MatDialogModule`, `MatListModule`, `MatButtonModule`, `OntimizeWebModule` |

Los NgModules wrapper (`OChartComponentModule`, `OChartOnDemandComponentModule`) se han mantenido por compatibilidad hacia atrás, actualizados para importar los componentes standalone en lugar de declararlos.

`OChartModule` actualizado para importar/exportar directamente los componentes standalone.

### Otras correcciones
- `comboData` tipado como `Array<{key: number; value: string}>` (antes `Array<Object>`) para pasar el template type checking
- `array` tipado como `Array<{key: any; value: string}>` en `OChartOnDemandComponent`

### Correcciones de dependencias — commits posteriores

| Commit | Cambio |
|--------|--------|
| `7c86f09` | `karma-jasmine-html-reporter` `~2.0.0` → `~2.1.0` (peer conflict con `jasmine-core ~5.1.0`) |
| `fba2d70` | Versión de la librería `18.0.0-SNAPSHOT-0` → `18.0.0-next.0` · peer dep `ontimize-web-ngx` `^18.0.0` → `^18.0.0-next.0` |

---

### Corrección de build — commit `cc77f8a` (29 abril 2026)

| Fichero | Cambio |
|---|---|
| `package.json` | `copy-files` reemplazado: `copyfiles` → `node scripts/copy-assets.js` |
| `scripts/copy-assets.js` | Nuevo script Node.js para copiar assets a `dist/` |

**Causa**: `copyfiles` con globs entre comillas simples falla silenciosamente en Windows. El script Node.js usa `fs.copyFileSync` directamente.

---

### Typed Forms — punto 3.4 (6 mayo 2026)

`save-preferences-dialog.component.ts`: migrado `UntypedFormGroup`/`UntypedFormControl` a `FormGroup`/`FormControl<string>` tipados con `nonNullable: true`.

---

### Compilación partial + NgModules @deprecated — commits posteriores (6 mayo 2026)

| Fichero | Cambio |
|---|---|
| `tsconfig.lib.json` | `"compilationMode": "partial"` añadido a `angularCompilerOptions` (requerido para publicación de librería en Angular 18) |
| `o-chart.module.ts` | `@deprecated` JSDoc añadido a `OChartComponentModule` |
| `o-chart-on-demand.module.ts` | `@deprecated` JSDoc añadido a `OChartOnDemandComponentModule` |

---

---

## Punto 3.4 — Quickstart integrada en monorepo (6 mayo 2026)

Aplicación de la rama `quickstart-15.x.x-develop` integrada en `projects/ontimize-web-ngx-charts-quickstart/` y migrada a Angular 18.

### Cambios en el monorepo

| Fichero | Cambio |
|---|---|
| `angular.json` | Proyecto `ontimize-web-ngx-charts-quickstart` añadido (builder `browser`, port 4807) |
| `tsconfig.json` | `baseUrl: "."` + `paths` para resolver `ontimize-web-ngx-charts` desde source |
| `package.json` | Scripts `start-quickstart`, `build-quickstart`, `build-quickstart-prod` añadidos |
| `projects/ontimize-web-ngx-charts-quickstart/tsconfig.app.json` | `baseUrl: "src"` + paths hacia source de la librería |

### Migraciones aplicadas a la quickstart

| Fichero | Cambio |
|---|---|
| `src/index.html` | `Material Icons` → `Material Symbols Outlined` · CDN highlight.js eliminado |
| `src/assets/css/app.scss` | Tema `ontimize-blue` · imports `@use` correctos · sin `@angular/flex-layout` |
| `src/app/shared/example/example.theme.scss` | M2 `mat.get-color-from-palette()` → tokens CSS M3 `--o-*` |
| `src/app/main/main-theme.scss` | M2 API → tokens CSS M3 `--o-*` |
| `src/app/shared/example/example.component.html` | `fxLayout`/`fxFlex` → clases `o-flex-*` · `*ngIf`/`*ngFor` → `@if`/`@for` |
| `src/app/shared/highlight/highlight.component.html` | `fxFill` → `o-flex-fill` · `[highlight]` → `{{ templateContent }}` |
| `src/app/shared/highlight/highlight.component.ts` | `ngx-highlightjs` eliminado · stub `showTooltip()` |
| `src/app/shared/switch-mode-theme/switch-mode-theme.component.html` | `*ngIf` → `@if` |
| `src/app/shared/shared.module.ts` | `FlexLayoutModule`/`HighlightModule` eliminados · Material modules añadidos |
| `src/app/app.module.ts` | `FlexLayoutModule`/`HighlightModule`/`HIGHLIGHT_OPTIONS` eliminados |
| `src/app/main/about/about.component.html` | `fxLayout`/`fxFlex` → clases `o-flex-*` · `@` → `&#64;` |
| `src/app/main/home/home.component.html` | `fxLayout`/`fxFlex` → clases `o-flex-*` |
| `src/app/main/*/**.component.html` (23 templates) | `fxLayout`/`fxFlex`/`*ngIf`/`*ngFor` → sintaxis Angular 18 |
| `src/main.ts` | Import `environment` corregido a ruta relativa |

## Pendiente

Ninguno — migración completa ✅
