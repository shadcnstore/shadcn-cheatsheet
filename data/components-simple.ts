/**
 * Simple component definitions for shadcn/ui cheatsheet
 * Following official shadcn/ui pattern - metadata only
 */

export interface ComponentInfo {
  id: string
  name: string
  description: string
  category:
    | "form"
    | "display"
    | "feedback"
    | "navigation"
    | "layout"
    | "data"
    | "overlay"
    | "utility"
  documentation: {
    url: string
    officialDocs: string
  }
  examples: Array<{
    name: string
    description: string
    registryName: string
  }>
}

/**
 * Component definitions - simple metadata approach
 */
export const components: ComponentInfo[] = [
  {
    id: "accordion",
    name: "Accordion",
    description:
      "Accessible collapsible panels for FAQs, docs, and settings. Built with Radix UI and Tailwind CSS for Next.js. Supports single or multiple open panels.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/accordion",
      officialDocs: "https://ui.shadcn.com/docs/components/accordion",
    },
    examples: [
      {
        name: "Default",
        description: "A basic accordion example demonstrating collapsible content panels with smooth animations and keyboard navigation support.",
        registryName: "accordion-demo",
      },
    ],
  },
  {
    id: "alert",
    name: "Alert",
    description: "Styled notification banners for errors, warnings, and info messages. shadcn/ui Alert supports default and destructive variants with icons and descriptions.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/alert",
      officialDocs: "https://ui.shadcn.com/docs/components/alert",
    },
    examples: [
      {
        name: "Default",
        description: "A standard informational alert with icon and description for general notifications and messages.",
        registryName: "alert-demo",
      },
      {
        name: "Destructive",
        description: "A destructive alert variant styled for error messages and critical warnings with red accent colors.",
        registryName: "alert-destructive",
      },
    ],
  },
  {
    id: "button",
    name: "Button",
    description: "shadcn/ui Button with primary, secondary, destructive, outline, ghost, and link variants. Supports icons, loading states, and all sizes for React and Next.js.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/button",
      officialDocs: "https://ui.shadcn.com/docs/components/button",
    },
    examples: [
      {
        name: "Default",
        description: "A standard primary button with solid background, ideal for main call-to-action elements and form submissions.",
        registryName: "button-demo",
      },
      {
        name: "Secondary",
        description: "A secondary button variant with muted styling, perfect for alternative actions and less prominent interactions.",
        registryName: "button-secondary",
      },
      {
        name: "Destructive",
        description: "A destructive button variant with red accent, designed for delete actions and critical operations requiring confirmation.",
        registryName: "button-destructive",
      },
      {
        name: "Outline",
        description: "An outline button variant with border styling, providing a subtle appearance for secondary navigation and optional actions.",
        registryName: "button-outline",
      },
      {
        name: "Ghost",
        description: "A ghost button variant with minimal styling and hover effects, ideal for toolbar actions and subtle interactions.",
        registryName: "button-ghost",
      },
      {
        name: "Link",
        description: "A link-styled button variant that appears as text, perfect for inline navigation and non-primary actions.",
        registryName: "button-link",
      },
      {
        name: 'Icon',
        description: 'A compact icon-only button for toolbar actions, navigation controls, and space-efficient interfaces.',
        registryName: 'button-icon'
      },
      {
        name: 'With Icon',
        description: 'A button with integrated icon and text label, enhancing visual communication and user understanding.',
        registryName: 'button-with-icon'
      },
      {
        name: "Loading",
        description: "A button with loading spinner state, displaying async operation progress and preventing duplicate submissions.",
        registryName: "button-loading",
      },
    ],
  },
  {
    id: "button-group",
    name: "Button Group",
    description: "Group related buttons with consistent spacing and styling. shadcn/ui Button Group supports horizontal, vertical, split-button, and dropdown patterns.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/button-group",
      officialDocs: "https://ui.shadcn.com/docs/components/button-group",
    },
    examples: [
      {
        name: "Default",
        description: "A basic button group demonstrating horizontally aligned buttons with consistent spacing and visual connection.",
        registryName: "button-group-demo",
      },
      {
        name: "Dropdown",
        description: "A button group integrated with dropdown menu for split-button actions and contextual options.",
        registryName: "button-group-dropdown",
      },
      {
        name: "Input",
        description: "A button group combined with input field for search bars and action-input combinations.",
        registryName: "button-group-input",
      },
      {
        name: "Input Group",
        description: "An advanced button group with multiple input elements for complex form layouts and data entry.",
        registryName: "button-group-input-group",
      },
      {
        name: "Nested",
        description: "Nested button groups demonstrating hierarchical organization and complex toolbar layouts.",
        registryName: "button-group-nested",
      },
      {
        name: "Orientation",
        description: "Button groups showcasing both horizontal and vertical orientations for flexible layout options.",
        registryName: "button-group-orientation",
      },
      {
        name: "Popover",
        description: "A button group with integrated popover for additional content and contextual information.",
        registryName: "button-group-popover",
      },
      {
        name: "Select",
        description: "A button group combined with select dropdown for filtered actions and option selection.",
        registryName: "button-group-select",
      },
      {
        name: "Separator",
        description: "A button group with visual separators for clear section division and action grouping.",
        registryName: "button-group-separator",
      },
      {
        name: "Size",
        description: "Button groups demonstrating different size variants from small to large for various UI contexts.",
        registryName: "button-group-size",
      },
      {
        name: "Split",
        description: "A split button group combining primary action with dropdown menu for related secondary options.",
        registryName: "button-group-split",
      },
    ],
  },
  {
    id: "card",
    name: "Card",
    description: "Structured container with header, content, and footer sections. shadcn/ui Card is ideal for dashboards, product displays, profiles, and blog posts.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/card",
      officialDocs: "https://ui.shadcn.com/docs/components/card",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard card layout with header, body content, and footer sections for structured information display.',
        registryName: 'card-demo'
      },
    ]
  },
  {
    id: "empty",
    name: "Empty",
    description: "Informative empty state with icon, message, and optional CTA for no-content scenarios. shadcn/ui Empty supports avatar, background, and outline variants.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/empty",
      officialDocs: "https://ui.shadcn.com/docs/components/empty",
    },
    examples: [
      {
        name: "Default",
        description: "A standard empty state with icon and message for displaying no-content scenarios in lists and collections.",
        registryName: "empty-demo",
      },
      {
        name: "Avatar",
        description: "An empty state featuring an avatar for user-related empty scenarios like no followers or team members.",
        registryName: "empty-avatar",
      },
      {
        name: "Avatar Group",
        description: "An empty state with multiple avatars for group-related scenarios like empty teams or collaboration spaces.",
        registryName: "empty-avatar-group",
      },
      {
        name: "Background",
        description: "An empty state with decorative background for enhanced visual appeal and brand consistency.",
        registryName: "empty-background",
      },
      {
        name: "Icon",
        description: "An empty state emphasizing an icon for clearer visual communication of the empty context.",
        registryName: "empty-icon",
      },
      {
        name: "Input Group",
        description: "An empty state with integrated input for encouraging immediate action like creating first item or searching.",
        registryName: "empty-input-group",
      },
      {
        name: "Outline",
        description: "An empty state with outlined styling for subtle, minimal empty state presentation.",
        registryName: "empty-outline",
      },
    ],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Accessible checkbox built with Radix UI for React Hook Form, multi-select, and settings. Supports indeterminate state, keyboard navigation, and validation.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/checkbox",
      officialDocs: "https://ui.shadcn.com/docs/components/checkbox",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard checkbox with label for form inputs, preferences, and boolean selections.',
        registryName: 'checkbox-demo'
      },
      {
        name: 'Form',
        description: 'A form with multiple checkboxes demonstrating group validation and complex selection patterns.',
        registryName: 'checkbox-form-multiple'
      },
      {
        name: 'Single Form',
        description: 'A form with a single checkbox demonstrating basic validation and selection patterns.',
        registryName: 'checkbox-form-single'
      },
      {
        name: 'Disabled',
        description: 'A disabled checkbox demonstrating non-interactive state for read-only or locked fields.',
        registryName: 'checkbox-disabled'
      },
    ]
  },
  {
    id: "input",
    name: "Input",
    description: "Accessible text input for text, email, password, and file types. shadcn/ui Input integrates with React Hook Form for validation and error states in Next.js.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/input",
      officialDocs: "https://ui.shadcn.com/docs/components/input",
    },
    examples: [
      {
        name: "Default",
        description: "A standard text input field for basic text entry and data collection.",
        registryName: "input-demo",
      },
      {
        name: "File",
        description: "A file upload input for document selection and media uploads with custom styling.",
        registryName: "input-file",
      },
      {
        name: "Disabled",
        description: "A disabled input demonstrating non-interactive state for read-only or locked fields.",
        registryName: "input-disabled",
      },
      {
        name: "With Label",
        description: "An input with associated label demonstrating proper form accessibility and semantic HTML structure.",
        registryName: "input-with-label",
      },
      {
        name: "With Button",
        description: "An input combined with a button for search bars, submission fields, and action-based input patterns.",
        registryName: "input-with-button",
      },
      {
        name: "Form",
        description: "A complete form implementation with multiple inputs, validation, and error handling using React Hook Form.",
        registryName: "input-form",
      },
    ],
  },
  {
    id: "badge",
    name: "Badge",
    description: "Compact label for status, categories, and counts. shadcn/ui Badge supports default, secondary, destructive, and outline variants in React and Next.js apps.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/badge",
      officialDocs: "https://ui.shadcn.com/docs/components/badge",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard badge with solid background for general labels, tags, and status indicators.',
        registryName: 'badge-demo'
      },
      {
        name: 'Secondary',
        description: 'A secondary badge variant with muted styling for less prominent labels and metadata.',
        registryName: 'badge-secondary'
      },
      {
        name: 'Destructive',
        description: 'A destructive badge variant with red accent for errors, warnings, and critical status indicators.',
        registryName: 'badge-destructive'
      },
      {
        name: 'Outline',
        description: 'An outline badge variant with border styling for subtle emphasis and secondary information.',
        registryName: 'badge-outline'
      }
    ]
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "User profile image with automatic fallback to initials. shadcn/ui Avatar built with Radix UI supports sizes, groups, and lazy-loading in React and Next.js.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/avatar",
      officialDocs: "https://ui.shadcn.com/docs/components/avatar",
    },
    examples: [
      {
        name: "Default",
        description: "A standard avatar with user image and fallback initials for profile representation and user identification.",
        registryName: "avatar-demo",
      },
    ],
  },
  {
    id: "separator",
    name: "Separator",
    description: "Thin horizontal or vertical divider for separating content sections. shadcn/ui Separator built with Radix UI with full ARIA support for React and Next.js.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/separator",
      officialDocs: "https://ui.shadcn.com/docs/components/separator",
    },
    examples: [
      {
        name: "Default",
        description: "A standard horizontal separator dividing content sections with subtle styling for clean visual hierarchy.",
        registryName: "separator-demo",
      },
    ],
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    description: "The Alert Dialog component from Shadcn UI is a critical modal React element built with Radix UI primitives and styled with Tailwind CSS for Next.js applications. This accessible component interrupts user workflow to display important messages, confirmations, or warnings that require immediate attention and response. Perfect for destructive actions, irreversible operations, critical warnings, and user confirmations, the Shadcn alert dialog features focus trapping, keyboard navigation with ESC support, and backdrop click prevention to ensure users acknowledge important information. With built-in ARIA attributes for screen reader compatibility and customizable action buttons, this WCAG-compliant component provides developers with a robust solution for critical user interactions in modern React applications.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/alert-dialog",
      officialDocs: "https://ui.shadcn.com/docs/components/alert-dialog",
    },
    examples: [
      {
        name: "Default",
        description: "A standard alert dialog with important messaging and confirmation buttons for critical user decisions and destructive actions.",
        registryName: "alert-dialog-demo",
      },
    ],
  },
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    description: "Maintains consistent width-to-height proportions for images and video. shadcn/ui Aspect Ratio prevents layout shift with 16:9, 4:3, 1:1, and custom ratios.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/aspect-ratio",
      officialDocs: "https://ui.shadcn.com/docs/components/aspect-ratio",
    },
    examples: [
      {
        name: "Default",
        description: "A standard aspect ratio container maintaining 16:9 proportions for videos and images in responsive layouts.",
        registryName: "aspect-ratio-demo",
      },
    ],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description: "Hierarchical page path navigation with clickable parent links. shadcn/ui Breadcrumb supports collapsed items, custom separators, and ARIA for Next.js.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/breadcrumb",
      officialDocs: "https://ui.shadcn.com/docs/components/breadcrumb",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard breadcrumb navigation showing hierarchical page structure with home and nested paths.',
        registryName: 'breadcrumb-demo'
      },
      {
        name: 'Custom separator',
        description: 'A breadcrumb with custom separator icons for personalized visual style and brand consistency.',
        registryName: 'breadcrumb-separator'
      },
      {
        name: 'With Dropdown',
        description: 'A breadcrumb with dropdown menu for collapsed navigation levels and space-efficient deep hierarchies.',
        registryName: 'breadcrumb-dropdown'
      },
      {
        name: 'Collapsed',
        description: 'A breadcrumb with ellipsis collapse for long paths, showing first, last, and truncated middle items.',
        registryName: 'breadcrumb-ellipsis'
      },
      {
        name: 'Link Component',
        description: 'A breadcrumb using custom Next.js Link component for client-side navigation and route prefetching.',
        registryName: 'breadcrumb-link'
      },
      {
        name: 'Responsive',
        description: 'A responsive breadcrumb adapting to mobile screens with truncation and touch-friendly interactions.',
        registryName: 'breadcrumb-responsive'
      },
    ]
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Interactive monthly date picker built with React DayPicker. shadcn/ui Calendar supports single, range, and multiple selections with locale and keyboard nav.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/calendar",
      officialDocs: "https://ui.shadcn.com/docs/components/calendar",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard calendar with month view for single date selection in forms and date pickers.',
        registryName: 'calendar-demo'
      },
      {
        name: 'Persian calendar',
        description: 'A Persian (Jalali) calendar variant with localized date system for international applications.',
        registryName: 'calendar-persian'
      },
      {
        name: 'Range Calendar',
        description: 'A date range selector calendar for booking periods, date spans, and interval selection.',
        registryName: 'calendar-range'
      },
      {
        name: 'Month and Year Selector',
        description: 'A calendar with dropdown month and year selectors for quick navigation to distant dates.',
        registryName: 'calendar-month-year'
      },
      {
        name: 'Date and Time Picker',
        description: 'A combined date and time picker for scheduling appointments and timestamp selection.',
        registryName: 'calendar-picker'
      },
      {
        name: 'Form',
        description: 'A calendar integrated with React Hook Form demonstrating validation and form state management.',
        registryName: 'calendar-form'
      },
    ]
  },
  {
    id: "carousel",
    name: "Carousel",
    description: "Touch-friendly image slideshow built with Embla Carousel. shadcn/ui Carousel supports autoplay, loop, orientation, and responsive sizing for Next.js.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/carousel",
      officialDocs: "https://ui.shadcn.com/docs/components/carousel",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard carousel slider with navigation arrows for browsing multiple content items and images.',
        registryName: 'carousel-demo'
      },
      {
        name: 'Size',
        description: 'A carousel demonstrating custom item sizing for cards, images, and content of varying dimensions.',
        registryName: 'carousel-size'
      },
      {
        name: 'Spacing',
        description: 'A carousel with adjustable spacing between slides for comfortable viewing and visual separation.',
        registryName: 'carousel-spacing'
      },
      {
        name: 'Orientation',
        description: 'A carousel showcasing both horizontal and vertical scroll orientations for flexible layout options.',
        registryName: 'carousel-orientation'
      },
      {
        name: 'API',
        description: 'A carousel demonstrating programmatic control with API methods for custom navigation and interactions.',
        registryName: 'carousel-api'
      },
      {
        name: 'Plugins',
        description: 'A carousel with Embla plugins for autoplay, pagination indicators, and advanced slideshow features.',
        registryName: 'carousel-plugins'
      },
    ]
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description: "Toggle content visibility with smooth animations. shadcn/ui Collapsible built with Radix UI supports controlled mode, custom triggers, and ARIA for React.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/collapsible",
      officialDocs: "https://ui.shadcn.com/docs/components/collapsible",
    },
    examples: [
      {
        name: "Default",
        description: "A standard collapsible panel with toggle button for expanding and collapsing content sections smoothly.",
        registryName: "collapsible-demo",
      },
    ],
  },
  {
    id: "combobox",
    name: "Combobox",
    description: "Searchable autocomplete select built with cmdk. shadcn/ui Combobox supports fuzzy search, async loading, and React Hook Form integration for Next.js.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/combobox",
      officialDocs: "https://ui.shadcn.com/docs/components/combobox",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard combobox with search input and filterable dropdown for efficient option selection from large lists.',
        registryName: 'combobox-demo'
      },
      {
        name: 'Popover',
        description: 'A combobox with popover layout displaying searchable options in a floating overlay for space-efficient interfaces.',
        registryName: 'combobox-popover'
      },
      {
        name: 'Dropdown',
        description: 'A combobox with dropdown menu style for integrated search and selection in form fields.',
        registryName: 'combobox-dropdown-menu'
      },
      {
        name: 'Form',
        description: 'A combobox integrated with React Hook Form demonstrating validation and form state management for searchable selects.',
        registryName: 'combobox-form'
      }
    ]
  },
  {
    id: "command",
    name: "Command",
    description: "Keyboard-driven command palette built with cmdk. shadcn/ui Command supports fuzzy search, grouped actions, shortcuts, and dialog spotlight mode for Next.js.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/command",
      officialDocs: "https://ui.shadcn.com/docs/components/command",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard command menu with search and grouped actions for quick keyboard-driven navigation and command execution.',
        registryName: 'command-demo'
      },
      {
        name: 'Dialog',
        description: 'A command palette in dialog mode with spotlight-style search overlay for global application navigation and actions.',
        registryName: 'command-dialog'
      }
    ]
  },
  {
    id: "context-menu",
    name: "Context Menu",
    description: "Right-click contextual menu built with Radix UI. shadcn/ui Context Menu supports submenus, checkboxes, radio groups, and keyboard nav for React and Next.js.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/context-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/context-menu",
    },
    examples: [
      {
        name: "Default",
        description: "A standard context menu activated by right-click showing contextual actions and commands for selected elements.",
        registryName: "context-menu-demo",
      },
    ],
  },
  {
    id: "date-picker",
    name: "Date Picker",
    description: "Date input using Calendar in a Popover. shadcn/ui Date Picker supports single dates, ranges, presets, and React Hook Form integration for Next.js.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/date-picker",
      officialDocs: "https://ui.shadcn.com/docs/components/date-picker",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard date picker with popover calendar for selecting single dates in forms and input fields.',
        registryName: 'date-picker-demo'
      },
      {
        name: 'Form',
        description: 'A date picker integrated with React Hook Form demonstrating validation and form state management for date inputs.',
        registryName: 'date-picker-form'
      }
    ]
  },
  {
    id: "field",
    name: "Field",
    description: "Form field wrapper with label, helper text, and error display. shadcn/ui Field supports all input types with ARIA attributes and responsive layout for Next.js.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/field",
      officialDocs: "https://ui.shadcn.com/docs/components/field",
    },
    examples: [
      {
        name: "Default",
        description: "A standard form field with label, helper text, and error display for accessible input controls.",
        registryName: "field-demo",
      },
      {
        name: "Checkbox",
        description: "A form field wrapping a checkbox input with label, validation, and error message display.",
        registryName: "field-checkbox",
      },
      {
        name: "Choice Card",
        description: "A form field using choice cards for visual option selection in multi-step forms.",
        registryName: "field-choice-card",
      },
      {
        name: "Fieldset",
        description: "A fieldset field variant grouping related controls with a shared legend and validation state.",
        registryName: "field-fieldset",
      },
      {
        name: "Group",
        description: "A field group layout displaying multiple form fields in a structured, aligned row.",
        registryName: "field-group",
      },
      {
        name: "Input",
        description: "A form field wrapping a text input with label, placeholder, and inline error messaging.",
        registryName: "field-input",
      },
      {
        name: "Radio",
        description: "A form field wrapping radio group controls for single-selection with accessible labels.",
        registryName: "field-radio",
      },
      {
        name: "Responsive",
        description: "A responsive form field that adapts layout between stacked (mobile) and inline (desktop) modes.",
        registryName: "field-responsive",
      },
      {
        name: "Select",
        description: "A form field wrapping a select dropdown with label and validation for option selection.",
        registryName: "field-select",
      },
      {
        name: "Slider",
        description: "A form field wrapping a range slider with label, value display, and validation messaging.",
        registryName: "field-slider",
      },
      {
        name: "Switch",
        description: "A form field wrapping a toggle switch with descriptive label for boolean settings.",
        registryName: "field-switch",
      },
      {
        name: "Textarea",
        description: "A form field wrapping a multi-line textarea with character count and error state handling.",
        registryName: "field-textarea",
      },
    ],
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "Accessible modal with focus trap, ESC close, and backdrop. shadcn/ui Dialog built with Radix UI supports forms, confirmations, and nested content in Next.js.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/dialog",
      officialDocs: "https://ui.shadcn.com/docs/components/dialog",
    },
    examples: [
      {
        name: "Default",
        description: "A standard modal dialog with header, content area, and action buttons for confirmations and user interactions.",
        registryName: "dialog-demo",
      },
    ],
  },
  {
    id: "drawer",
    name: "Drawer",
    description: "Mobile-friendly slide-in panel built with Vaul. shadcn/ui Drawer supports multiple directions, drag-to-close, and nested scrolling for React and Next.js apps.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/drawer",
      officialDocs: "https://ui.shadcn.com/docs/components/drawer",
    },
    examples: [
      {
        name: "Default",
        description: "A standard drawer panel sliding from screen edge with drag-to-close for mobile navigation and secondary content.",
        registryName: "drawer-demo",
      },
    ],
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    description: "Contextual action menu built with Radix UI. shadcn/ui Dropdown Menu supports submenus, checkboxes, radio groups, and keyboard navigation for React and Next.js.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/dropdown-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/dropdown-menu",
    },
    examples: [
      {
        name: 'Default',
        description: 'A standard dropdown menu with actions and options for user interactions and contextual commands.',
        registryName: 'dropdown-menu-demo'
      },
      {
        name: 'Checkboxes',
        description: 'A dropdown menu with checkbox items for multi-select options like filtering and preferences.',
        registryName: 'dropdown-menu-checkboxes'
      },
      {
        name: 'Radio Group',
        description: 'A dropdown menu with radio group items for single-select options like sorting and view modes.',
        registryName: 'dropdown-menu-radio-group'
      }
    ]
  },
  {
    id: "hover-card",
    name: "Hover Card",
    description: "Preview popup on hover for links and interactive elements. shadcn/ui Hover Card built with Radix UI supports custom positioning, delay, and rich content.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/hover-card",
      officialDocs: "https://ui.shadcn.com/docs/components/hover-card",
    },
    examples: [
      {
        name: "Default",
        description: "A standard hover card displaying rich content preview on hover for user profiles and contextual information.",
        registryName: "hover-card-demo",
      },
    ],
  },
  {
    id: "input-group",
    name: "Input Group",
    description: "Combine inputs with buttons, icons, and dropdowns in one layout. shadcn/ui Input Group supports text, icon, spinner, and tooltip addons for React forms.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/input-group",
      officialDocs: "https://ui.shadcn.com/docs/components/input-group",
    },
    examples: [
      {
        name: "Default",
        description: "A standard input group combining a text field with addons for enhanced form controls.",
        registryName: "input-group-demo",
      },
      {
        name: "Button",
        description: "An input group with an action button attached for search bars and submit-on-type patterns.",
        registryName: "input-group-button",
      },
      {
        name: "Custom",
        description: "A fully custom input group with arbitrary content prefix and suffix addons.",
        registryName: "input-group-custom",
      },
      {
        name: "Dropdown",
        description: "An input group with an attached dropdown for protocol selectors, currency pickers, and type filters.",
        registryName: "input-group-dropdown",
      },
      {
        name: "Icon",
        description: "An input group with a leading or trailing icon for search fields and formatted inputs.",
        registryName: "input-group-icon",
      },
      {
        name: "Label",
        description: "An input group with an embedded label addon for unit indicators like px, %, and currency symbols.",
        registryName: "input-group-label",
      },
      {
        name: "Spinner",
        description: "An input group with loading spinner indicator for async validation and live-search fields.",
        registryName: "input-group-spinner",
      },
      {
        name: "Text",
        description: "An input group with a static text prefix or suffix addon like 'https://' or '.com'.",
        registryName: "input-group-text",
      },
      {
        name: "Textarea",
        description: "An input group with a multi-line textarea and addons for rich text input with context.",
        registryName: "input-group-textarea",
      },
      {
        name: "Tooltip",
        description: "An input group with a tooltip addon explaining the expected input format or constraints.",
        registryName: "input-group-tooltip",
      },
    ],
  },
  {
    id: "input-otp",
    name: "Input OTP",
    description: "Segmented OTP input for verification codes and PINs. shadcn/ui Input OTP supports custom patterns, separators, paste, and React Hook Form for Next.js.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/input-otp",
      officialDocs: "https://ui.shadcn.com/docs/components/input-otp",
    },
    examples: [
      {
        name: "Default",
        description: "A standard OTP input with segmented fields for entering verification codes and one-time passwords.",
        registryName: "input-otp-demo",
      },
      {
        name: "Pattern",
        description: "An OTP input with custom validation patterns for specific code formats and character requirements.",
        registryName: "input-otp-pattern",
      },
      {
        name: "Separator",
        description: "An OTP input with visual separators between segments for improved readability and code grouping.",
        registryName: "input-otp-separator",
      },
      {
        name: "Controlled",
        description: "A controlled OTP input for programmatic value management and custom validation logic.",
        registryName: "input-otp-controlled",
      },
      {
        name: "Form",
        description: "An OTP input integrated with React Hook Form for validation and secure authentication flows.",
        registryName: "input-otp-form",
      }
    ],
  },
  {
    id: "item",
    name: "Item",
    description: "Versatile list item with support for avatars, icons, images, dropdowns, and links. shadcn/ui Item provides consistent layouts for content lists and navigation menus.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/item",
      officialDocs: "https://ui.shadcn.com/docs/components/item",
    },
    examples: [
      {
        name: "Default",
        description: "A standard list item with title and description for content lists and menu items.",
        registryName: "item-demo",
      },
      {
        name: "Avatar",
        description: "A list item with user avatar for contact lists, team views, and user-centric displays.",
        registryName: "item-avatar",
      },
      {
        name: "Dropdown",
        description: "A list item with an inline dropdown menu for quick contextual actions on each row.",
        registryName: "item-dropdown",
      },
      {
        name: "Group",
        description: "A grouped list of items with a shared section heading for organized content displays.",
        registryName: "item-group",
      },
      {
        name: "Header",
        description: "A list item with a prominent header section for categorized lists and section titles.",
        registryName: "item-header",
      },
      {
        name: "Icon",
        description: "A list item with leading icon for navigation menus, feature lists, and icon-labeled rows.",
        registryName: "item-icon",
      },
      {
        name: "Image",
        description: "A list item with thumbnail image for media libraries, product lists, and visual catalogs.",
        registryName: "item-image",
      },
      {
        name: "Link",
        description: "A fully clickable list item styled as a link for navigation menus and content listings.",
        registryName: "item-link",
      },
      {
        name: "Size",
        description: "List item size variants (small, medium, large) for compact and spacious layout contexts.",
        registryName: "item-size",
      },
      {
        name: "Variant",
        description: "Item style variants including default, muted, and destructive for different semantic contexts.",
        registryName: "item-variant",
      },
    ],
  },
  {
    id: "label",
    name: "Label",
    description: "Accessible form label with click-to-focus for inputs and form controls. shadcn/ui Label built with Radix UI supports required states and ARIA associations.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/label",
      officialDocs: "https://ui.shadcn.com/docs/components/label",
    },
    examples: [
      {
        name: "Default",
        description: "A standard form label with proper semantic association to input controls for accessibility and usability.",
        registryName: "label-demo",
      },
    ],
  },
  {
    id: "kbd",
    name: "Kbd",
    description: "Visual keyboard key indicator for shortcuts and key combos. shadcn/ui Kbd supports modifier keys, key groups, button and tooltip integration for React.",
    category: "display",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/kbd",
      officialDocs: "https://ui.shadcn.com/docs/components/kbd",
    },
    examples: [
      {
        name: "Default",
        description: "A standard keyboard key indicator for displaying shortcuts and key names in documentation.",
        registryName: "kbd-demo",
      },
      {
        name: "Button",
        description: "A keyboard key displayed alongside a button for showing associated keyboard shortcuts.",
        registryName: "kbd-button",
      },
      {
        name: "Group",
        description: "A keyboard shortcut combination group showing multi-key sequences like Ctrl+Shift+P.",
        registryName: "kbd-group",
      },
      {
        name: "Input Group",
        description: "A keyboard key indicator embedded in an input group for shortcut hints and search fields.",
        registryName: "kbd-input-group",
      },
      {
        name: "Tooltip",
        description: "A keyboard shortcut shown inside a tooltip for discoverable keyboard navigation hints.",
        registryName: "kbd-tooltip",
      },
    ],
  },
  {
    id: "menubar",
    name: "Menubar",
    description: "Desktop-style horizontal menu bar built with Radix UI. shadcn/ui Menubar supports submenus, checkboxes, radio groups, and keyboard shortcuts for Next.js.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/menubar",
      officialDocs: "https://ui.shadcn.com/docs/components/menubar",
    },
    examples: [
      {
        name: "Default",
        description: "A standard menubar with File, Edit, View menus for desktop-style application navigation and commands.",
        registryName: "menubar-demo",
      },
    ],
  },
  {
    id: "navigation-menu",
    name: "Navigation Menu",
    description: "Primary site nav with dropdown menus built with Radix UI. shadcn/ui Navigation Menu supports mega menus, keyboard Arrow key navigation, and viewport-aware positioning.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/navigation-menu",
      officialDocs: "https://ui.shadcn.com/docs/components/navigation-menu",
    },
    examples: [
      {
        name: "Default",
        description: "A standard navigation menu with dropdowns for hierarchical site navigation and main menu systems.",
        registryName: "navigation-menu-demo",
      },
    ],
  },
  {
    id: "native-select",
    name: "Native Select",
    description: "Styled HTML select for mobile-optimized forms. shadcn/ui Native Select maintains browser functionality with consistent design, option groups, and validation states.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/native-select",
      officialDocs: "https://ui.shadcn.com/docs/components/native-select",
    },
    examples: [
      {
        name: "Default",
        description: "A styled native HTML select for mobile-optimized dropdowns with full browser compatibility.",
        registryName: "native-select-demo",
      },
      {
        name: "Disabled",
        description: "A disabled native select demonstrating non-interactive state for locked or read-only fields.",
        registryName: "native-select-disabled",
      },
      {
        name: "Groups",
        description: "A native select with option groups for organizing related choices under labeled categories.",
        registryName: "native-select-groups",
      },
      {
        name: "Invalid",
        description: "A native select with invalid validation state showing error styling and accessible error messaging.",
        registryName: "native-select-invalid",
      },
    ],
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Page navigation with numbers, prev/next, and ellipsis. shadcn/ui Pagination supports customizable page counts, responsive truncation, and ARIA for Next.js.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/pagination",
      officialDocs: "https://ui.shadcn.com/docs/components/pagination",
    },
    examples: [
      {
        name: "Default",
        description: "A standard pagination control with page numbers and navigation arrows for browsing paginated content and lists.",
        registryName: "pagination-demo",
      },
    ],
  },
  {
    id: "popover",
    name: "Popover",
    description: "Floating content overlay triggered by user interaction. shadcn/ui Popover built with Radix UI supports custom positioning, focus management, and click-outside-close.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/popover",
      officialDocs: "https://ui.shadcn.com/docs/components/popover",
    },
    examples: [
      {
        name: "Default",
        description: "A standard popover with rich content for displaying forms, filters, and interactive elements on trigger.",
        registryName: "popover-demo",
      },
    ],
  },
  {
    id: "progress",
    name: "Progress",
    description: "Animated progress bar for file uploads, loading, and multi-step workflows. shadcn/ui Progress built with Radix UI has ARIA support and smooth transitions.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/progress",
      officialDocs: "https://ui.shadcn.com/docs/components/progress",
    },
    examples: [
      {
        name: "Default",
        description: "A standard progress bar showing task completion percentage for uploads, downloads, and loading operations.",
        registryName: "progress-demo",
      },
    ],
  },
  {
    id: "radio-group",
    name: "Radio Group",
    description: "Single-choice selection built with Radix UI. shadcn/ui Radio Group supports Arrow key navigation, horizontal and vertical layout, and React Hook Form integration.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/radio-group",
      officialDocs: "https://ui.shadcn.com/docs/components/radio-group",
    },
    examples: [
      {
        name: "Default",
        description: "A standard radio group for single-selection from mutually exclusive options in forms and surveys.",
        registryName: "radio-group-demo",
      },
      {
        name: "Form",
        description: "A radio group integrated with React Hook Form demonstrating validation and form state management for option selection.",
        registryName: "radio-group-form",
      }
    ],
  },
  {
    id: "resizable",
    name: "Resizable",
    description: "Draggable split-pane layout built with react-resizable-panels. shadcn/ui Resizable supports horizontal and vertical panels, min/max sizes, and collapsible panels.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/resizable",
      officialDocs: "https://ui.shadcn.com/docs/components/resizable",
    },
    examples: [
      {
        name: "Default",
        description: "A standard resizable panel layout with draggable dividers for user-customizable split-pane interfaces.",
        registryName: "resizable-demo",
      },
      {
        name: "Vertical",
        description: "A vertical resizable layout stacking panels top-to-bottom with adjustable heights for multi-row interfaces.",
        registryName: "resizable-vertical",
      },
      {
        name: "Handle",
        description: "A resizable layout with custom drag handle styling for enhanced visual feedback and brand consistency.",
        registryName: "resizable-handle",
      },
      {
        name: "With Handles",
        description: "A complex resizable layout combining vertical and horizontal panels with styled drag handles for advanced layouts.",
        registryName: "resizable-demo-with-handle",
      }
    ],
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    description: "Custom-styled cross-browser scrollbars built with Radix UI. shadcn/ui Scroll Area supports horizontal and vertical scrolling with consistent design in Next.js.",
    category: "layout",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/scroll-area",
      officialDocs: "https://ui.shadcn.com/docs/components/scroll-area",
    },
    examples: [
      {
        name: "Default",
        description: "A standard vertical scroll area with custom-styled scrollbars for content overflow and list displays.",
        registryName: "scroll-area-demo",
      },
      {
        name: "Horizontal",
        description: "A horizontal scroll area for wide content, tables, and side-scrolling interfaces with custom scrollbar styling.",
        registryName: "scroll-area-horizontal-demo",
      }
    ],
  },
  {
    id: "select",
    name: "Select",
    description: "Polished custom select dropdown built with Radix UI. shadcn/ui Select supports option groups, search, keyboard nav, and React Hook Form integration for Next.js.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/select",
      officialDocs: "https://ui.shadcn.com/docs/components/select",
    },
    examples: [
      {
        name: "Default",
        description: "A standard select dropdown with options for basic form selection and data entry.",
        registryName: "select-demo",
      },
      {
        name: "Scrollable",
        description: "A scrollable select with many options demonstrating virtualization and efficient rendering for large datasets.",
        registryName: "select-scrollable",
      },
      {
        name: "Form",
        description: "A select integrated with React Hook Form demonstrating validation and form state management.",
        registryName: "select-form",
      },
    ],
  },
  {
    id: "sheet",
    name: "Sheet",
    description: "Side panel overlay that slides from any screen edge. shadcn/ui Sheet extends Dialog with left, right, top, and bottom positions for React and Next.js apps.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/sheet",
      officialDocs: "https://ui.shadcn.com/docs/components/sheet",
    },
    examples: [
      {
        name: "Default",
        description: "A standard sheet panel sliding from screen edge for supplementary content and contextual information.",
        registryName: "sheet-demo",
      },
      {
        name: "Side",
        description: "A sheet panel demonstrating multiple slide-in directions (left, right, top, bottom) for flexible positioning.",
        registryName: "sheet-side",
      }
    ],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "Animated shimmer placeholder for loading content. shadcn/ui Skeleton prevents layout shift during data fetching with customizable shapes and sizes for Next.js.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/skeleton",
      officialDocs: "https://ui.shadcn.com/docs/components/skeleton",
    },
    examples: [
      {
        name: "Default",
        description: "A standard skeleton loader with shimmer animation for content placeholders during data fetching and loading states.",
        registryName: "skeleton-demo",
      },
    ],
  },
  {
    id: "slider",
    name: "Slider",
    description: "Range input for selecting numeric values by dragging. shadcn/ui Slider built with Radix UI supports single and multi-thumb, step increments, and React Hook Form.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/slider",
      officialDocs: "https://ui.shadcn.com/docs/components/slider",
    },
    examples: [
      {
        name: "Default",
        description: "A standard range slider for numeric value selection with draggable handle for settings and adjustments.",
        registryName: "slider-demo",
      },
    ],
  },
  {
    id: "sonner",
    name: "Sonner (Toast)",
    description: "Toast notifications built with Sonner for Next.js. shadcn/ui Sonner supports success, error, and warning variants, auto-dismiss, promise handling, and stacking.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/sonner",
      officialDocs: "https://ui.shadcn.com/docs/components/sonner",
    },
    examples: [
      {
        name: "Default",
        description: "A standard toast notification with temporary message display for success confirmations and system alerts.",
        registryName: "sonner-demo",
      },
    ],
  },
  {
    id: "switch",
    name: "Switch",
    description: "Binary on/off toggle built with Radix UI. shadcn/ui Switch supports controlled mode, disabled state, keyboard navigation, and React Hook Form for Next.js apps.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/switch",
      officialDocs: "https://ui.shadcn.com/docs/components/switch",
    },
    examples: [
      {
        name: "Default",
        description: "A standard toggle switch for binary on/off controls in settings and preferences with smooth animations.",
        registryName: "switch-demo",
      },
      {
        name: "Form",
        description: "A switch integrated with React Hook Form demonstrating validation and form state management for toggle controls.",
        registryName: "switch-form",
      }
    ],
  },
  {
    id: "table",
    name: "Table",
    description: "Semantic HTML table with sorting, pagination, and row selection. shadcn/ui Table integrates with TanStack Table for filtering and virtualization in Next.js.",
    category: "data",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/table",
      officialDocs: "https://ui.shadcn.com/docs/components/table",
    },
    examples: [
      {
        name: "Default",
        description: "A standard data table with headers, rows, and cells for displaying structured information and datasets.",
        registryName: "table-demo",
      },
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Tabbed content panels built with Radix UI. shadcn/ui Tabs supports Arrow key navigation, controlled mode, and smooth panel transitions for React and Next.js.",
    category: "navigation",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/tabs",
      officialDocs: "https://ui.shadcn.com/docs/components/tabs",
    },
    examples: [
      {
        name: "Default",
        description: "A standard tabs interface with multiple panels for organizing related content into switchable views.",
        registryName: "tabs-demo",
      },
    ],
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "Multi-line text input with auto-resize and character limits. shadcn/ui Textarea integrates with React Hook Form for validation in forms, comments, and messages.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/textarea",
      officialDocs: "https://ui.shadcn.com/docs/components/textarea",
    },
    examples: [
      {
        name: "Default",
        description: "A standard multi-line textarea for comments, descriptions, and long-form text entry in forms.",
        registryName: "textarea-demo",
      },
      {
        name: "Disabled",
        description: "A disabled textarea demonstrating non-interactive state for read-only content and locked fields.",
        registryName: "textarea-disabled",
      },
      {
        name: "With label",
        description: "A textarea with associated label demonstrating proper form accessibility and semantic HTML structure.",
        registryName: "textarea-with-label",
      },
      {
        name: "With text",
        description: "A textarea with helper text providing guidance, character counts, or additional context for users.",
        registryName: "textarea-with-text",
      },
      {
        name: "With button",
        description: "A textarea combined with action button for message submission and quick-action input patterns.",
        registryName: "textarea-with-button",
      },
      {
        name: "Form",
        description: "A textarea integrated with React Hook Form demonstrating validation and form state management for multi-line inputs.",
        registryName: "textarea-form",
      }
    ],
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "Two-state pressed/unpressed button built with Radix UI. shadcn/ui Toggle supports outline and size variants for text formatting, filters, and toolbar controls.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/toggle",
      officialDocs: "https://ui.shadcn.com/docs/components/toggle",
    },
    examples: [
      {
        name: "Default",
        description: "A standard toggle button for two-state controls like bold text, favorites, and feature toggles.",
        registryName: "toggle-demo",
      },
      {
        name: "Outline",
        description: "An outline toggle variant with border styling for subtle two-state button controls.",
        registryName: "toggle-outline",
      },
      {
        name: "Small",
        description: "A small toggle button for compact interfaces and toolbar controls with limited space.",
        registryName: "toggle-sm",
      },
      {
        name: "Large",
        description: "A large toggle button for prominent controls and touch-friendly mobile interfaces.",
        registryName: "toggle-lg",
      },
      {
        name: "Disabled",
        description: "A disabled toggle demonstrating non-interactive state for locked or unavailable features.",
        registryName: "toggle-disabled",
      }
    ],
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    description: "Group of toggles for single or multiple selection. shadcn/ui Toggle Group supports alignment controls, view switchers, filter bars, and size variants for Next.js.",
    category: "form",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/toggle-group",
      officialDocs: "https://ui.shadcn.com/docs/components/toggle-group",
    },
    examples: [
      {
        name: "Default",
        description: "A standard toggle group for single or multiple selection among related options like view modes and filters.",
        registryName: "toggle-group-demo",
      },
      {
        name: "Outline",
        description: "An outline toggle group variant with border styling for subtle grouped controls.",
        registryName: "toggle-group-outline",
      },
      {
        name: "Small",
        description: "A small toggle group for compact toolbars and interfaces with limited space.",
        registryName: "toggle-group-sm",
      },
      {
        name: "Large",
        description: "A large toggle group for prominent controls and touch-friendly mobile interfaces.",
        registryName: "toggle-group-lg",
      },
      {
        name: "Disabled",
        description: "A disabled toggle group demonstrating non-interactive state for locked options.",
        registryName: "toggle-group-disabled",
      },
      {
        name: "Spacing",
        description: "A toggle group with custom spacing between items for visual separation and clarity.",
        registryName: "toggle-group-spacing",
      }
    ],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Accessible tooltip on hover or focus built with Radix UI. shadcn/ui Tooltip supports custom positioning, delay, ARIA attributes, and keyboard nav for Next.js.",
    category: "overlay",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/tooltip",
      officialDocs: "https://ui.shadcn.com/docs/components/tooltip",
    },
    examples: [
      {
        name: "Default",
        description: "A standard tooltip with informational text appearing on hover for UI hints and contextual help.",
        registryName: "tooltip-demo",
      },
    ],
  },
  {
    id: "spinner",
    name: "Spinner",
    description: "Animated loading spinner for async operations and content loading. shadcn/ui Spinner supports size variants, color themes, and button and input group integration.",
    category: "feedback",
    documentation: {
      url: "https://ui.shadcn.com/docs/components/spinner",
      officialDocs: "https://ui.shadcn.com/docs/components/spinner",
    },
    examples: [
      {
        name: "Default",
        description: "A standard loading spinner for indicating asynchronous operations and content loading states.",
        registryName: "spinner-demo",
      },
      {
        name: "Badge",
        description: "A spinner combined with a badge for inline loading indicators next to status labels.",
        registryName: "spinner-badge",
      },
      {
        name: "Basic",
        description: "A minimal bare spinner without wrapper for embedding in custom loading UI layouts.",
        registryName: "spinner-basic",
      },
      {
        name: "Button",
        description: "A spinner embedded inside a button to show loading state during async form submissions.",
        registryName: "spinner-button",
      },
      {
        name: "Color",
        description: "Spinner color variants matching brand and semantic colors for consistent loading indicators.",
        registryName: "spinner-color",
      },
      {
        name: "Custom",
        description: "A custom spinner with configurable animation, stroke width, and design for unique brand styles.",
        registryName: "spinner-custom",
      },
      {
        name: "Empty",
        description: "A spinner shown inside an empty state for loading content before data arrives.",
        registryName: "spinner-empty",
      },
      {
        name: "Input Group",
        description: "A spinner integrated in an input group addon for async validation and live search feedback.",
        registryName: "spinner-input-group",
      },
      {
        name: "Item",
        description: "A spinner inside a list item for per-row loading states in dynamic content lists.",
        registryName: "spinner-item",
      },
      {
        name: "Size",
        description: "Spinner size variants (xs, sm, md, lg, xl) for different UI contexts and component sizes.",
        registryName: "spinner-size",
      },
    ],
  },
]

/**
 * Get all components for the application
 */
export function getAllComponentsSync(): ComponentInfo[] {
  return components
}

