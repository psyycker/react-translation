---
sidebar_position: 2
---

# registerTranslations

| Parameter | Name            | Mandatory | default value | Type                                                            | Description                                                                                                                      |
|-----------|-----------------|-----------|---------------|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 0         | newTranslations | Y         |               | TranslationObject: {[key: string]: string \| TranslationObject} | An object (json format) which can contain other objects or strings.<br/> Example: { "myComponent": { title: "value" }, "yes": "Yes" } |
| 1         | namespace       | N         | "common"      | string                                                          | The namespace to insert the translations                                                                                         |
