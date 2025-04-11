# connexify

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/itz-dev-tasavvuf/connexify)

## Build Issue

There was an issue with the build process that resulted in a 404 error when deploying to Firebase Hosting. The root cause of this problem was incorrect `className` syntax in the `app/roles/page.tsx` file. 

The following files were modified to fix this issue:
* `components/roles/role-card.tsx`
* `app/roles/page.tsx`
* `components/dashboard/roles-section.tsx`

If you encounter similar build errors related to JSX syntax, please check for unquoted `className` attributes in other files. Any help in identifying and correcting these instances would be greatly appreciated.

**Labels:** `bug`, `help wanted`