/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegisterImport } from './routes/register'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as NotesIndexImport } from './routes/notes/index'
import { Route as ProjectsAddImport } from './routes/projects/add'
import { Route as ProjectsProjectIdImport } from './routes/projects/$projectId'
import { Route as NotesAddImport } from './routes/notes/add'
import { Route as NotesNoteIdImport } from './routes/notes/$noteId'
import { Route as ProjectsEditProjectIdImport } from './routes/projects/edit.$projectId'
import { Route as NotesEditNoteIdImport } from './routes/notes/edit.$noteId'

// Create/Update Routes

const RegisterRoute = RegisterImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NotesIndexRoute = NotesIndexImport.update({
  path: '/notes/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsAddRoute = ProjectsAddImport.update({
  path: '/projects/add',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsProjectIdRoute = ProjectsProjectIdImport.update({
  path: '/projects/$projectId',
  getParentRoute: () => rootRoute,
} as any)

const NotesAddRoute = NotesAddImport.update({
  path: '/notes/add',
  getParentRoute: () => rootRoute,
} as any)

const NotesNoteIdRoute = NotesNoteIdImport.update({
  path: '/notes/$noteId',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsEditProjectIdRoute = ProjectsEditProjectIdImport.update({
  path: '/projects/edit/$projectId',
  getParentRoute: () => rootRoute,
} as any)

const NotesEditNoteIdRoute = NotesEditNoteIdImport.update({
  path: '/notes/edit/$noteId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/notes/$noteId': {
      preLoaderRoute: typeof NotesNoteIdImport
      parentRoute: typeof rootRoute
    }
    '/notes/add': {
      preLoaderRoute: typeof NotesAddImport
      parentRoute: typeof rootRoute
    }
    '/projects/$projectId': {
      preLoaderRoute: typeof ProjectsProjectIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/add': {
      preLoaderRoute: typeof ProjectsAddImport
      parentRoute: typeof rootRoute
    }
    '/notes/': {
      preLoaderRoute: typeof NotesIndexImport
      parentRoute: typeof rootRoute
    }
    '/notes/edit/$noteId': {
      preLoaderRoute: typeof NotesEditNoteIdImport
      parentRoute: typeof rootRoute
    }
    '/projects/edit/$projectId': {
      preLoaderRoute: typeof ProjectsEditProjectIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LoginRoute,
  RegisterRoute,
  NotesNoteIdRoute,
  NotesAddRoute,
  ProjectsProjectIdRoute,
  ProjectsAddRoute,
  NotesIndexRoute,
  NotesEditNoteIdRoute,
  ProjectsEditProjectIdRoute,
])

/* prettier-ignore-end */
