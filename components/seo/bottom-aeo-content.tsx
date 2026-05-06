import React from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

// Component-specific FAQs
const COMPONENT_FAQS: Record<string, Array<{ q: string; a: string }>> = {
  button: [
    { q: "How do I add a loading state to a shadcn Button?", a: "Add a `disabled` prop and an animated spinner icon: `<Button disabled><Loader2 className=\"animate-spin\" />Loading...</Button>`. The loading variant example shows the full pattern." },
    { q: "How do I use an icon-only Button in shadcn/ui?", a: "Use the `Icon` variant example: `<Button variant=\"ghost\" size=\"icon\"><Icon /></Button>`. Set `size=\"icon\"` to get a square button." },
    { q: "Can I use shadcn Button as a Link?", a: "Yes, use the `asChild` prop with Next.js Link: `<Button asChild><Link href=\"/page\">Go</Link></Button>`. This renders a link with button styles." },
  ],
  input: [
    { q: "How do I validate a shadcn Input with React Hook Form?", a: "Spread the register result: `<Input {...register('email', { required: true })} />`. Use `formState.errors` to show error messages." },
    { q: "How do I add an icon inside a shadcn Input?", a: "Wrap the Input in a relative div and use absolute positioning for the icon. The Input Group component provides ready-made addon patterns." },
    { q: "How do I create a password input with show/hide toggle?", a: "Use `type={showPassword ? 'text' : 'password'}` and a Button with Eye/EyeOff icons. The input-group examples show this pattern." },
  ],
  dialog: [
    { q: "How do I prevent a shadcn Dialog from closing on outside click?", a: "Add `onInteractOutside={(e) => e.preventDefault()}` to `<DialogContent>`. This keeps the dialog open unless the user clicks a close button." },
    { q: "How do I put a form inside a shadcn Dialog?", a: "Place your form and submit button inside `<DialogContent>`. Use `<DialogFooter>` for the action buttons and handle form state in the parent component." },
    { q: "How do I control a shadcn Dialog programmatically?", a: "Use the `open` and `onOpenChange` props: `<Dialog open={open} onOpenChange={setOpen}>`. Manage state with `useState` in the parent." },
  ],
  select: [
    { q: "How do I use shadcn Select with React Hook Form?", a: "Use `<Controller>` from React Hook Form: wrap `<Select>` with `<Controller name=\"field\" control={control} render={({ field }) => <Select onValueChange={field.onChange} value={field.value}>` etc." },
    { q: "How do I set a default value for shadcn Select?", a: "Use `defaultValue` for uncontrolled or `value` for controlled: `<Select defaultValue=\"option1\">`. The value must match an `<SelectItem value=\"...\">` value." },
    { q: "Can I make shadcn Select searchable?", a: "The Select component does not have built-in search. Use the Combobox component instead, which combines input with a filterable dropdown list." },
  ],
  checkbox: [
    { q: "How do I handle checkbox groups with shadcn Checkbox?", a: "Manage an array of checked values in state, then for each checkbox use `checked={values.includes(id)}` and `onCheckedChange` to toggle items in the array." },
    { q: "How do I use the indeterminate state in shadcn Checkbox?", a: "Set `checked=\"indeterminate\"` on `<Checkbox>`. This is useful for 'select all' checkboxes when only some child items are selected." },
    { q: "How do I integrate shadcn Checkbox with React Hook Form?", a: "Use `<Controller>` or spread register: for the Form variant use `<FormField>` which handles the Radix UI checked/onCheckedChange API automatically." },
  ],
  accordion: [
    { q: "How do I open multiple accordion items at once?", a: "Set `type=\"multiple\"` on `<Accordion>` and use an array for `value`. With `type=\"single\"`, only one panel can be open at a time." },
    { q: "How do I control an accordion programmatically?", a: "Use `value` and `onValueChange` props: `<Accordion type=\"single\" value={open} onValueChange={setOpen}>`. The value is the AccordionItem's `value` prop." },
    { q: "Can I disable individual accordion items?", a: "Yes, add `disabled` to `<AccordionItem>`: `<AccordionItem value=\"item-1\" disabled>`. The trigger will appear dimmed and won't respond to clicks." },
  ],
  tabs: [
    { q: "How do I sync shadcn Tabs with the URL?", a: "Use `useSearchParams` and router: `<Tabs value={searchParams.get('tab') || 'default'} onValueChange={(v) => router.push('?tab=' + v)}>`. This enables deep linking to tab states." },
    { q: "How do I lazy-load tab content in shadcn?", a: "Wrap `<TabsContent>` children in a conditional render or use React.lazy. Only render expensive content when `value === tabId`." },
    { q: "How do I style the active tab differently?", a: "The active tab uses `data-[state=active]` CSS selector. Add custom Tailwind classes using `data-[state=active]:bg-primary` on `<TabsTrigger>`." },
  ],
  table: [
    { q: "How do I add sorting to a shadcn Table?", a: "Integrate TanStack Table: use `useReactTable` with `getSortedRowModel()`. Pass column `enableSorting: true` and use `column.getToggleSortingHandler()` on header clicks." },
    { q: "How do I add row selection to a shadcn Table?", a: "Add a checkbox column using TanStack Table's `getIsAllPageRowsSelected()` and `getToggleAllPageRowsSelectedHandler()`. Each row gets `row.getToggleRowSelectedHandler()`." },
    { q: "Can I paginate a shadcn Table?", a: "Yes, use TanStack Table with `getPaginationRowModel()`. Combine with the Pagination component to build a full paginated data table." },
  ],
  form: [
    { q: "What form library works best with shadcn/ui?", a: "React Hook Form is recommended and used in all shadcn/ui form examples. Install with `pnpm add react-hook-form @hookform/resolvers zod` for validation." },
    { q: "How do I show validation errors with shadcn Form?", a: "Use `<FormMessage>` inside `<FormField>`. It automatically reads error messages from React Hook Form's `formState.errors` for the field." },
    { q: "How do I reset a shadcn form after submission?", a: "Call `form.reset()` from `useForm()`. You can pass default values: `form.reset({ email: '' })` to reset to specific values after successful submission." },
  ],
  "dropdown-menu": [
    { q: "How do I open a shadcn Dropdown Menu programmatically?", a: "Use `<DropdownMenu open={open} onOpenChange={setOpen}>` with state. Set `open={true}` to force it open, useful for tutorial highlights or keyboard shortcuts." },
    { q: "How do I add keyboard shortcuts to Dropdown Menu items?", a: "Add `<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>` inside `<DropdownMenuItem>`. This renders the shortcut hint—you'll need to implement the actual keyboard handler separately." },
    { q: "How do I close the Dropdown after clicking an item?", a: "By default, clicking a `<DropdownMenuItem>` closes the menu. If using `onSelect` to prevent close, use `event.preventDefault()` inside the handler." },
  ],
  sheet: [
    { q: "What is the difference between shadcn Sheet and Drawer?", a: "Sheet slides from the edge and is better for desktop sidebar panels and filter drawers. Drawer (Vaul) is optimized for mobile with drag-to-close gestures." },
    { q: "How do I make a Sheet open from the left?", a: "Set `side=\"left\"` on `<SheetContent>`: `<SheetContent side=\"left\">`. Options are left, right (default), top, bottom." },
    { q: "How do I put a scrollable list inside a shadcn Sheet?", a: "Add `overflow-y-auto` to `<SheetContent>` or use `<ScrollArea>` inside. Set a max-height on the content wrapper to enable scrolling." },
  ],
  badge: [
    { q: "How do I make a clickable shadcn Badge?", a: "Wrap in an anchor or button: `<a href=\"/\"><Badge>Click</Badge></a>`. Or use `asChild` if the Badge component supports it. Add `cursor-pointer` class." },
    { q: "How do I add an icon inside a shadcn Badge?", a: "Add any icon component before or after the text: `<Badge><CircleCheck className=\"h-3 w-3\" />Active</Badge>`. Use `h-3 w-3` for small badges." },
    { q: "How do I create a notification count badge?", a: "Position absolutely over an icon: `<div className=\"relative\"><Bell /><Badge className=\"absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center\">{count}</Badge></div>`." },
  ],
  avatar: [
    { q: "How does shadcn Avatar handle broken image URLs?", a: "The `<AvatarFallback>` renders automatically when the image fails to load. Show initials or an icon: `<AvatarFallback>JD</AvatarFallback>`." },
    { q: "How do I create an avatar group with overlapping avatars?", a: "Use negative margin and a flex container: `<div className=\"flex -space-x-2\">{users.map(u => <Avatar key={u.id}>...</Avatar>)}</div>`." },
    { q: "How do I add a status indicator to a shadcn Avatar?", a: "Wrap in a relative div and add a small colored dot: `<div className=\"relative\"><Avatar /><span className=\"absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white\" /></div>`." },
  ],
  "alert-dialog": [
    { q: "How do I use shadcn AlertDialog for delete confirmation?", a: "Put the delete trigger in `<AlertDialogTrigger>` and call the delete function in `<AlertDialogAction onClick={handleDelete}>`. Use the destructive variant for the action button." },
    { q: "How is shadcn AlertDialog different from Dialog?", a: "AlertDialog is specifically for confirmation prompts — it requires the user to explicitly choose an action. It prevents closing by clicking outside, which Dialog allows." },
    { q: "How do I make the AlertDialog action button show a loading state?", a: "Replace `<AlertDialogAction>` with a Button using `asChild` prop, then manage a loading state: `<AlertDialogAction asChild><Button loading={isDeleting}>Delete</Button></AlertDialogAction>`." },
  ],
  tooltip: [
    { q: "How do I show a shadcn Tooltip on a disabled button?", a: "Wrap the disabled button in a `<span>`: `<Tooltip><TooltipTrigger asChild><span><Button disabled>Click</Button></span></TooltipTrigger></Tooltip>`. Disabled elements don't fire pointer events." },
    { q: "How do I change the delay before a shadcn Tooltip appears?", a: "Set `delayDuration` on `<TooltipProvider>`: `<TooltipProvider delayDuration={300}>`. Value is in milliseconds. Use 0 for instant display." },
    { q: "How do I put rich content (not just text) inside a Tooltip?", a: "Add any JSX inside `<TooltipContent>`. For example, include an icon and formatted text. Set `className` to adjust padding and width as needed." },
  ],
  popover: [
    { q: "What is the difference between Popover and Tooltip in shadcn/ui?", a: "Tooltip shows on hover for brief hints. Popover opens on click and can contain interactive elements like forms, buttons, and selects. Use Popover when content needs user interaction." },
    { q: "How do I close a shadcn Popover after a user action?", a: "Use controlled mode: `<Popover open={open} onOpenChange={setOpen}>`. Call `setOpen(false)` inside your action handler to close the popover programmatically." },
    { q: "How do I align a Popover to the start or end of its trigger?", a: "Add `align=\"start\"` or `align=\"end\"` to `<PopoverContent>`. The default is `center`. You can also use `side` to control which direction the popover opens." },
  ],
  carousel: [
    { q: "How do I add autoplay to a shadcn Carousel?", a: "Install the Embla autoplay plugin: `pnpm add embla-carousel-autoplay`. Pass it to `opts`: `<Carousel plugins={[Autoplay({ delay: 2000 })]}>`." },
    { q: "How do I control the current slide programmatically?", a: "Use the `setApi` prop to get the Embla API: `<Carousel setApi={setApi}>`. Then call `api.scrollTo(index)` to navigate to a specific slide." },
    { q: "How do I add slide dots/indicator to a shadcn Carousel?", a: "Use the Carousel API's `selectedScrollSnap` and `scrollSnapList` to build a dot indicator. The API example shows how to track the current index." },
  ],
  calendar: [
    { q: "How do I select a date range with shadcn Calendar?", a: "Use `mode=\"range\"` and a `DateRange` state: `const [range, setRange] = useState<DateRange>()`. Pass `selected={range}` and `onSelect={setRange}` to `<Calendar>`." },
    { q: "How do I disable specific dates in shadcn Calendar?", a: "Use the `disabled` prop with a function: `<Calendar disabled={(date) => date < new Date() || date.getDay() === 0}>`. This disables past dates and Sundays." },
    { q: "How do I integrate shadcn Calendar with React Hook Form?", a: "Use a `<Controller>` wrapping the Calendar. The Form variant in the examples shows the complete pattern with date formatting using `date-fns`." },
  ],
  "date-picker": [
    { q: "How do I create a date range picker with shadcn?", a: "Use Calendar with `mode=\"range\"` inside a Popover. The range calendar example shows the pattern. Combine with two DateFormatter instances for start/end display." },
    { q: "How do I format the displayed date in a shadcn Date Picker?", a: "Use `date-fns` format: `format(date, 'PPP')` gives 'April 29th, 2023'. Import `{ format }` from 'date-fns' and apply it to the selected date value." },
    { q: "How do I add preset dates (Today, Tomorrow, Next week) to a Date Picker?", a: "Add a sidebar with `<Button variant=\"ghost\" onClick={() => setDate(addDays(new Date(), 7))}>Next week</Button>` patterns. The presets example demonstrates this pattern." },
  ],
  combobox: [
    { q: "How do I load async options in shadcn Combobox?", a: "Use an async fetch inside the Popover's `onOpenChange`: when opened, call your API, set options state, and render them as `<CommandItem>` elements." },
    { q: "How do I allow creating new items in a shadcn Combobox?", a: "Add a `<CommandItem value=\"create\">` at the bottom showing the typed input. On select, add the new item to your options array and select it." },
    { q: "How do I use Combobox for multi-select?", a: "Manage a `string[]` of selected values. In `onSelect`, toggle items: `setValues(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])`. Show checkmarks for selected items." },
  ],
  "radio-group": [
    { q: "How do I use shadcn Radio Group with React Hook Form?", a: "Use `<Controller name=\"option\" control={control} render={({ field }) => <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>`. Access value with `field.value`." },
    { q: "How do I style radio cards instead of radio circles?", a: "Use the Field component's choice-card variant, or wrap each `<RadioGroupItem>` in a styled Card with `cursor-pointer` and use `data-[state=checked]` to style the selected state." },
    { q: "How do I layout Radio Group items horizontally?", a: "Add `className=\"flex space-x-4\"` to `<RadioGroup>`. Wrap each item in a flex row with the label alongside the radio button." },
  ],
  "input-otp": [
    { q: "How do I auto-submit when the OTP is complete?", a: "Use `onChange` to watch for when the value length equals the OTP length: `<InputOTP onChange={(val) => { if (val.length === 6) handleSubmit(val) }}>`. Trigger submission automatically." },
    { q: "How do I validate OTP format (numbers only)?", a: "Use the `REGEXP_ONLY_DIGITS` pattern from `input-otp`: `<InputOTP pattern={REGEXP_ONLY_DIGITS}>`. Import it from the `input-otp` package." },
    { q: "How do I integrate shadcn InputOTP with React Hook Form?", a: "The Form example shows the complete pattern using `<FormField>` with `Controller`. Use `field.onChange` with `<InputOTP onComplete={field.onChange}>`." },
  ],
  "hover-card": [
    { q: "How do I add a delay before showing a shadcn HoverCard?", a: "Add `openDelay={500}` and `closeDelay={300}` to `<HoverCard>`. Values are in milliseconds. A slight delay prevents accidental triggers while scanning." },
    { q: "What content should I put in a shadcn HoverCard?", a: "HoverCards work best for user profiles, link previews, and contextual info. Include an avatar, name, bio, and metadata. Keep it under 250 words to avoid overwhelming users." },
    { q: "How is HoverCard different from Tooltip?", a: "Tooltip shows short text hints. HoverCard shows rich interactive-like content (images, formatted text, multiple data points) triggered on hover. HoverCard content can be selected/copied." },
  ],
  pagination: [
    { q: "How do I control which page is active in shadcn Pagination?", a: "The Pagination component renders links — control via URL params. Use `useSearchParams` to read `?page=3` and highlight `<PaginationLink isActive>` when `page === currentPage`." },
    { q: "How do I add ellipsis to shadcn Pagination for large page counts?", a: "Use `<PaginationEllipsis>` between page groups. For example, show pages 1, 2, 3, `...`, 98, 99, 100. Calculate which pages to show based on the current page." },
    { q: "How do I make shadcn Pagination work with TanStack Table?", a: "Use `table.getState().pagination.pageIndex` for current page and `table.getPageCount()` for total pages. Call `table.setPageIndex(n)` on page link clicks." },
  ],
  progress: [
    { q: "How do I animate a shadcn Progress bar to fill over time?", a: "Use `useEffect` with an interval or `animate` from Framer Motion. Set `value` in state and increment it: `setProgress(prev => Math.min(prev + 10, 100))`." },
    { q: "How do I show an indeterminate loading state with Progress?", a: "Set `value={null}` or omit the value prop. Add a CSS animation with `animate-pulse` or a custom shimmer keyframe to indicate unknown duration." },
    { q: "How do I add a label showing percentage inside the Progress bar?", a: "Stack the progress bar with an absolutely positioned text element. Use `value` state to show `{value}%` inside the bar with `text-white` and center alignment." },
  ],
  slider: [
    { q: "How do I create a price range slider with two handles?", a: "Use `defaultValue={[20, 80]}` (an array) on `<Slider>`. The component supports multiple thumbs when the value array has more than one element." },
    { q: "How do I use shadcn Slider with React Hook Form?", a: "Wrap in `<Controller>`: `<Controller name=\"volume\" render={({ field }) => <Slider value={[field.value]} onValueChange={([v]) => field.onChange(v)} />}`." },
    { q: "How do I display the current slider value next to the handle?", a: "Read the value from state and render it beside the slider. Add `onValueChange={(v) => setValue(v[0])}` to track the current value and display it." },
  ],
  switch: [
    { q: "How do I use shadcn Switch with React Hook Form?", a: "Use `<Controller>` or `<FormField>`: set `checked={field.value}` and `onCheckedChange={field.onChange}` on `<Switch>`. The Form example demonstrates this pattern." },
    { q: "How do I add a label to a shadcn Switch?", a: "Use `<Label htmlFor=\"switch-id\">Setting</Label><Switch id=\"switch-id\">`. The `htmlFor`/`id` pair associates the label so clicking it toggles the switch." },
    { q: "How do I make a group of switches exclusive (only one active)?", a: "Use a single `useState` tracking the active switch id. Each `<Switch checked={active === id} onCheckedChange={() => setActive(id)}>` creates radio-like behavior." },
  ],
  textarea: [
    { q: "How do I make a shadcn Textarea auto-resize as the user types?", a: "Listen to `onChange` and set height: `e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'`. Or use a library like `react-textarea-autosize`." },
    { q: "How do I add a character counter to a shadcn Textarea?", a: "Track length in state: `onChange={(e) => { setValue(e.target.value); setCount(e.target.value.length) }}`. Render `{count}/500` below the textarea." },
    { q: "How do I use shadcn Textarea with React Hook Form?", a: "Spread register result: `<Textarea {...register('message', { required: true, maxLength: 500 })} />`. The Form example shows full validation setup." },
  ],
  sonner: [
    { q: "How do I show a success toast with shadcn Sonner?", a: "Import `toast` from 'sonner' and call `toast.success('Profile updated!')`. Make sure `<Toaster>` is in your root layout." },
    { q: "How do I show a toast for an async operation?", a: "Use `toast.promise(asyncFn, { loading: 'Saving...', success: 'Saved!', error: 'Failed' })`. Sonner handles the state transitions automatically." },
    { q: "How do I add an action button inside a Sonner toast?", a: "Pass `action` option: `toast('Event created', { action: { label: 'Undo', onClick: handleUndo } })`. The button appears inside the toast notification." },
  ],
  skeleton: [
    { q: "How do I create a card skeleton loader with shadcn?", a: "Replicate your card layout with `<Skeleton>` elements: `<Skeleton className=\"h-40 w-full mb-4\" />` for an image, then rows for title and text." },
    { q: "How do I conditionally show skeleton or real content?", a: "Use a loading state: `{isLoading ? <SkeletonCard /> : <RealCard data={data} />}`. The skeleton should match the exact dimensions of the loaded content." },
    { q: "How do I customize the skeleton animation?", a: "Override the `animate-pulse` class in your CSS or add a custom `shimmer` animation. The `<Skeleton>` component accepts a `className` prop for full customization." },
  ],
  menubar: [
    { q: "How do I add keyboard shortcuts to a shadcn Menubar item?", a: "Add `<MenubarShortcut>⌘S</MenubarShortcut>` inside `<MenubarItem>`. Use `useEffect` with a `keydown` listener to handle the actual keyboard shortcut behavior." },
    { q: "How do I nest submenus in shadcn Menubar?", a: "Use `<MenubarSub>` wrapping `<MenubarSubTrigger>` and `<MenubarSubContent>`. This creates a flyout submenu from any menu item." },
    { q: "How do I add checkboxes to a shadcn Menubar?", a: "Use `<MenubarCheckboxItem checked={checked} onCheckedChange={setChecked}>`. For radio-style exclusivity, use `<MenubarRadioGroup>` with `<MenubarRadioItem>`." },
  ],
  "navigation-menu": [
    { q: "How do I create a mega menu with shadcn NavigationMenu?", a: "Use `<NavigationMenuContent>` with a grid layout inside: `<div className=\"grid gap-3 p-6 md:w-[400px] md:grid-cols-2\">`. Add links and descriptions in each grid cell." },
    { q: "How do I make shadcn NavigationMenu mobile-responsive?", a: "Hide the NavigationMenu on mobile and replace with a Sheet or Drawer containing the same links. Use `hidden md:flex` on the nav and `md:hidden` on the mobile menu trigger." },
    { q: "How do I highlight the active navigation item?", a: "Check the current pathname: `<NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === '/about' && 'text-primary')}>`. Use `usePathname()` from Next.js." },
  ],
  collapsible: [
    { q: "How do I control Collapsible open state with React state?", a: "Use `open` and `onOpenChange` props: `<Collapsible open={isOpen} onOpenChange={setIsOpen}>`. This gives full control over when the collapsible opens or closes." },
    { q: "How is shadcn Collapsible different from Accordion?", a: "Collapsible is a single expandable element for one piece of content. Accordion is a group of collapsibles where you can control how many can be open at once." },
    { q: "How do I animate the expand/collapse of shadcn Collapsible?", a: "Use CSS transitions on the content. Add `data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up` classes to `<CollapsibleContent>`." },
  ],
  command: [
    { q: "How do I open a shadcn Command Dialog with a keyboard shortcut?", a: "Use `useEffect` with a `keydown` listener for `Meta+K` or `Ctrl+K`. Set `open` state to `true` and render `<CommandDialog open={open}>`. The Dialog example shows the complete pattern." },
    { q: "How do I add sections to a shadcn Command menu?", a: "Use `<CommandGroup heading=\"Actions\">` to group related items. Multiple groups display with their heading labels and visual separation." },
    { q: "How do I handle async search in shadcn Command?", a: "Set `shouldFilter={false}` to disable built-in filtering. Implement your own `onValueChange` handler that calls an API and updates the items list based on the search query." },
  ],
  "context-menu": [
    { q: "How do I trigger a shadcn ContextMenu on an image or card?", a: "Wrap the element in `<ContextMenuTrigger>`: `<ContextMenuTrigger><img src=\"...\" /></ContextMenuTrigger>`. Right-clicking the image shows the context menu." },
    { q: "How do I disable a ContextMenu item based on state?", a: "Add the `disabled` prop: `<ContextMenuItem disabled={!hasSelection}>Cut</ContextMenuItem>`. Disabled items are visible but not clickable." },
    { q: "How do I add icons to ContextMenu items?", a: "Place an icon before the text inside `<ContextMenuItem>`: `<ContextMenuItem><Copy className=\"mr-2 h-4 w-4\" />Copy</ContextMenuItem>`." },
  ],
  resizable: [
    { q: "How do I save the panel size in a shadcn Resizable layout?", a: "Use the `onLayout` callback on `<ResizablePanelGroup>`: `onLayout={(sizes) => localStorage.setItem('layout', JSON.stringify(sizes))}`. Restore with `defaultSize` on mount." },
    { q: "How do I make a panel collapsible in shadcn Resizable?", a: "Add `collapsible` and `collapsedSize={0}` to `<ResizablePanel>`. Use `ref` to call `panel.collapse()` and `panel.expand()` programmatically." },
    { q: "How do I set minimum and maximum panel sizes?", a: "Use `minSize={20}` and `maxSize={60}` props on `<ResizablePanel>`. Values are percentages of the total container size." },
  ],
  "scroll-area": [
    { q: "How do I set a fixed height for shadcn ScrollArea?", a: "Add a `className` with a height: `<ScrollArea className=\"h-72 w-full\">`. The scroll area will clip content and show scrollbars when it overflows." },
    { q: "How do I enable horizontal scrolling in ScrollArea?", a: "Add `orientation=\"horizontal\"` to `<ScrollArea>` and ensure the inner content is wider than the container. Use `overflow-x-auto` patterns work here." },
    { q: "When should I use ScrollArea instead of CSS overflow?", a: "Use ScrollArea when you need custom-styled scrollbars that match your design system and are consistent across browsers (Chrome, Firefox, Safari all handle scrollbars differently)." },
  ],
  "toggle": [
    { q: "How is shadcn Toggle different from Checkbox?", a: "Toggle is a button-like control for toolbar actions (bold, italic, favorite). Checkbox represents a form field boolean. Use Toggle for visual mode switches, Checkbox for form inputs." },
    { q: "How do I use shadcn Toggle for text formatting like Bold?", a: "Use `pressed` state: `<Toggle pressed={isBold} onPressedChange={setIsBold} aria-label=\"Bold\"><Bold /></Toggle>`. Apply formatting when pressed is true." },
    { q: "How do I group Toggles for exclusive selection?", a: "Use `<ToggleGroup type=\"single\">` instead of individual Toggles. It manages exclusive selection automatically with ARIA and keyboard navigation." },
  ],
  "toggle-group": [
    { q: "How do I use ToggleGroup for text alignment?", a: "Use `type=\"single\"` for exclusive alignment: `<ToggleGroup type=\"single\" value={align} onValueChange={setAlign}><ToggleGroupItem value=\"left\"><AlignLeft /></ToggleGroupItem>...</ToggleGroup>`." },
    { q: "How do I allow multiple selections in shadcn ToggleGroup?", a: "Use `type=\"multiple\"`: `<ToggleGroup type=\"multiple\" value={active} onValueChange={setActive}>`. The `value` is a `string[]` of all active item values." },
    { q: "How do I disable individual items in ToggleGroup?", a: "Add `disabled` to `<ToggleGroupItem value=\"option\" disabled>`. The item appears dimmed and cannot be selected." },
  ],
  "native-select": [
    { q: "When should I use Native Select instead of shadcn Select?", a: "Use Native Select on mobile-first or performance-critical forms where the device's native picker is preferred. Also use it for simpler forms where Radix UI overhead isn't justified." },
    { q: "How do I add option groups to shadcn Native Select?", a: "Use standard HTML `<optgroup label=\"Group\">` inside `<NativeSelect>`. The groups example shows how to organize options into labeled categories." },
    { q: "How do I show a validation error state in Native Select?", a: "Add the `invalid` class or use the `data-invalid` attribute. The invalid example shows the error styling pattern with red border and error message." },
  ],
  field: [
    { q: "What does the shadcn Field component do?", a: "Field is a form layout wrapper that groups a label, input control, helper text, and error message into a consistent structure. It handles ARIA associations automatically." },
    { q: "How do I show an error message in a shadcn Field?", a: "Pass `error` and `errorMessage` props to `<Field>`. The component renders the message with error styling and updates the input's `aria-invalid` attribute." },
    { q: "How do I create a required field indicator with shadcn Field?", a: "Add `required` prop to `<Field>`. This typically adds an asterisk (*) to the label and ensures the `required` attribute is set on the underlying input." },
  ],
  item: [
    { q: "When should I use shadcn Item component?", a: "Use Item for building consistent list UIs — contact lists, notification feeds, navigation menus, and settings rows. It handles avatar + content + action layouts in a standardized way." },
    { q: "How do I make an Item clickable as a link?", a: "Use the Link variant: wrap `<Item>` content or use the `item-link` example which renders the entire item as an anchor tag with hover and focus styles." },
    { q: "How do I add a dropdown to each Item in a list?", a: "Add a `<DropdownMenu>` to the trailing section of the item. The item-dropdown example shows how to position action menus without disrupting the item layout." },
  ],
  kbd: [
    { q: "How do I display a keyboard shortcut combination like Ctrl+K?", a: "Use multiple `<Kbd>` elements: `<Kbd>Ctrl</Kbd><span>+</span><Kbd>K</Kbd>`. The kbd-group example shows how to render key combinations with proper spacing." },
    { q: "Where should I use the shadcn Kbd component?", a: "Use Kbd in command palettes, tooltips, keyboard shortcut guides, and help documentation. It visually distinguishes keys from regular text for better scannability." },
    { q: "How do I embed a Kbd inside a Button?", a: "The kbd-button example shows a Button with a Kbd inside for showing shortcuts: `<Button>Search <Kbd>⌘K</Kbd></Button>`. Use `ml-auto` to push the shortcut to the right." },
  ],
  "input-group": [
    { q: "How do I add a currency symbol prefix to an input?", a: "Use input-group-text: `<InputGroup><InputGroupText>$</InputGroupText><Input /></InputGroup>`. The text addon renders attached to the input without a gap." },
    { q: "How do I add a search button attached to an input?", a: "Use input-group-button: attach a `<Button>` to the right side of the input. The button shares the same border-radius group as the input." },
    { q: "How do I show a loading spinner inside an input?", a: "Use the spinner variant: add `<InputGroupText><Spinner /></InputGroupText>` as a trailing addon. Toggle it based on async validation state." },
  ],
}

// Related component suggestions by component id
const RELATED_COMPONENTS: Record<string, string[]> = {
  button: ["button-group", "toggle", "badge"],
  "button-group": ["button", "toggle-group", "input-group"],
  input: ["input-group", "input-otp", "textarea", "field"],
  "input-group": ["input", "field", "button-group", "native-select"],
  "input-otp": ["input", "field", "dialog"],
  textarea: ["input", "field", "form"],
  checkbox: ["radio-group", "switch", "field"],
  "radio-group": ["checkbox", "toggle-group", "select", "field"],
  switch: ["checkbox", "toggle", "field"],
  select: ["combobox", "native-select", "dropdown-menu"],
  "native-select": ["select", "combobox", "field"],
  combobox: ["select", "command", "input"],
  command: ["combobox", "dialog", "popover"],
  dialog: ["alert-dialog", "sheet", "drawer"],
  "alert-dialog": ["dialog", "popover", "sheet"],
  sheet: ["dialog", "drawer", "sidebar"],
  drawer: ["sheet", "dialog", "collapsible"],
  popover: ["tooltip", "hover-card", "dialog"],
  tooltip: ["popover", "hover-card", "badge"],
  "hover-card": ["popover", "tooltip", "avatar"],
  "dropdown-menu": ["context-menu", "menubar", "select"],
  "context-menu": ["dropdown-menu", "menubar", "popover"],
  menubar: ["navigation-menu", "dropdown-menu", "tabs"],
  "navigation-menu": ["menubar", "breadcrumb", "tabs"],
  breadcrumb: ["pagination", "navigation-menu", "separator"],
  pagination: ["breadcrumb", "table", "progress"],
  accordion: ["collapsible", "tabs", "separator"],
  collapsible: ["accordion", "sheet", "dialog"],
  tabs: ["accordion", "card", "navigation-menu"],
  carousel: ["scroll-area", "aspect-ratio", "skeleton"],
  "scroll-area": ["carousel", "table", "resizable"],
  resizable: ["scroll-area", "separator", "card"],
  "aspect-ratio": ["carousel", "skeleton", "avatar"],
  card: ["badge", "avatar", "separator"],
  avatar: ["badge", "hover-card", "item"],
  badge: ["button", "avatar", "alert"],
  alert: ["badge", "sonner", "progress"],
  skeleton: ["progress", "spinner", "card"],
  spinner: ["skeleton", "progress", "button"],
  progress: ["spinner", "skeleton", "slider"],
  sonner: ["alert", "badge", "dialog"],
  table: ["pagination", "checkbox", "select"],
  separator: ["accordion", "card", "menubar"],
  label: ["input", "checkbox", "field"],
  "date-picker": ["calendar", "popover", "input"],
  calendar: ["date-picker", "popover", "input"],
  slider: ["progress", "radio-group", "field"],
  toggle: ["switch", "checkbox", "toggle-group"],
  "toggle-group": ["toggle", "tabs", "radio-group"],
  field: ["input", "label", "input-group"],
  item: ["avatar", "checkbox", "badge"],
  kbd: ["tooltip", "command", "button"],
}

// Default FAQs when no component-specific ones exist
const DEFAULT_FAQS = [
  { q: "How is Shadcn/UI different from other UI libraries?", a: "Unlike Material-UI or Ant Design, Shadcn/UI doesn't install as a dependency. Components are copied into your project, giving you complete ownership and customization control." },
  { q: "Do I need to install Shadcn/UI as a package?", a: "No, Shadcn/UI components are copied directly into your codebase. You only need Tailwind CSS and the specific Radix UI primitives each component uses." },
  { q: "Can I use Shadcn/UI with Next.js?", a: "Yes, Shadcn/UI works perfectly with Next.js App Router and Pages Router, React, Vite, and any React-based framework." },
  { q: "How do I customize Shadcn/UI components?", a: "Since components live in your codebase, you can modify them directly. Change styles, add props, or alter behavior. Use CSS variables for theme customization." },
  { q: "Are Shadcn/UI components accessible?", a: "Yes, all components are built on Radix UI primitives, which follow WAI-ARIA guidelines and support keyboard navigation, screen readers, and focus management." },
]

// Component name lookup for display
const COMPONENT_NAMES: Record<string, string> = {
  "button": "Button", "button-group": "Button Group", "input": "Input", "input-group": "Input Group",
  "input-otp": "Input OTP", "textarea": "Textarea", "checkbox": "Checkbox", "radio-group": "Radio Group",
  "switch": "Switch", "select": "Select", "native-select": "Native Select", "combobox": "Combobox",
  "command": "Command", "dialog": "Dialog", "alert-dialog": "Alert Dialog", "sheet": "Sheet",
  "drawer": "Drawer", "popover": "Popover", "tooltip": "Tooltip", "hover-card": "Hover Card",
  "dropdown-menu": "Dropdown Menu", "context-menu": "Context Menu", "menubar": "Menubar",
  "navigation-menu": "Navigation Menu", "breadcrumb": "Breadcrumb", "pagination": "Pagination",
  "accordion": "Accordion", "collapsible": "Collapsible", "tabs": "Tabs", "carousel": "Carousel",
  "scroll-area": "Scroll Area", "resizable": "Resizable", "aspect-ratio": "Aspect Ratio",
  "card": "Card", "avatar": "Avatar", "badge": "Badge", "alert": "Alert", "skeleton": "Skeleton",
  "spinner": "Spinner", "progress": "Progress", "sonner": "Sonner (Toast)", "table": "Table",
  "separator": "Separator", "label": "Label", "date-picker": "Date Picker", "calendar": "Calendar",
  "slider": "Slider", "toggle": "Toggle", "toggle-group": "Toggle Group", "field": "Field",
  "item": "Item", "kbd": "Kbd",
}

interface BottomAEOContentProps {
  componentId?: string
  componentName?: string
  className?: string
}

export function BottomAEOContent({ componentId, componentName, className }: BottomAEOContentProps) {
  const faqs = (componentId && COMPONENT_FAQS[componentId]) ? COMPONENT_FAQS[componentId] : DEFAULT_FAQS
  const related = componentId ? (RELATED_COMPONENTS[componentId] || []) : []
  const displayName = componentName || (componentId ? COMPONENT_NAMES[componentId] : undefined)

  return (
    <div className={className ?? "container mx-auto px-4 py-8 space-y-8"}>
      {/* What is Shadcn/UI */}
      <Card id="component-about" className="p-6 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
            <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              {displayName ? `About the shadcn/ui ${displayName} Component` : "What is Shadcn/UI?"}
            </h2>
            <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
              {displayName
                ? `The ${displayName} component is part of shadcn/ui — a collection of accessible, copy-paste React components built with Radix UI and Tailwind CSS. Install it with \`npx shadcn@latest add ${componentId}\` and copy it directly into your project.`
                : "Shadcn/ui is a component library built on Tailwind CSS and Radix UI primitives. It provides copy-paste React components with TypeScript support, customizable themes, and accessibility features. Includes 50+ components like Button, Dialog, Form, and Table."
              }
            </p>
          </div>
        </div>
      </Card>

      {/* Component-specific FAQ */}
      <Card id="component-faq" className="p-6">
        <h3 className="text-xl font-semibold mb-6">
          {displayName
            ? `${displayName} Component — Frequently Asked Questions`
            : "Frequently Asked Questions"
          }
        </h3>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h4 className="font-medium text-lg mb-2">{faq.q}</h4>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Related Components */}
      {related.length > 0 && (
        <Card id="component-related" className="p-6">
          <h3 className="text-xl font-semibold mb-4">Related shadcn/ui Components</h3>
          <div className="flex flex-wrap gap-2">
            {related.map((id) => (
              <Link
                key={id}
                href={`/component/${id}/`}
                className="inline-flex items-center px-3 py-1.5 rounded-md border bg-muted/50 hover:bg-muted text-sm font-medium transition-colors"
              >
                {COMPONENT_NAMES[id] || id}
              </Link>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
