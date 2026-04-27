import { useQuery } from "@tanstack/react-query"
import { getNeedleValvesIB, getNeedleValveIBFilterOptions, type NeedleValveIBFilterParams, getNeedleValveHBFilterOptions, getNeedleValvesHB, type NeedleValveHBFilterParams } from "../../../../api/needleValveApi"

import {
  getNeedleValvesHP, getNeedleValveHPFilterOptions,
  type NeedleValveHPFilterParams,
} from "../../../../api/needleValveApi"

const clean = (filters: Record<string, any>) => Object.fromEntries(Object.entries(filters).filter(([_, v]) => !Array.isArray(v) || v.length > 0))

export const useNeedleValveIBFilterOptions = () =>
  useQuery({
    queryKey: ["nv-ib-filters"],
    queryFn: getNeedleValveIBFilterOptions,
    staleTime: Infinity,
  })

export const useNeedleValvesIB = (filters: NeedleValveIBFilterParams) =>
  useQuery({
    queryKey: ["nv-ib", clean(filters)],
    queryFn: () => getNeedleValvesIB(clean(filters) as NeedleValveIBFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })
export const useNeedleValveHBFilterOptions = () =>
  useQuery({
    queryKey: ["nv-hb-filters"],
    queryFn: getNeedleValveHBFilterOptions,
    staleTime: Infinity,
  })

export const useNeedleValvesHB = (filters: NeedleValveHBFilterParams) =>
  useQuery({
    queryKey: ["nv-hb", clean(filters)],
    queryFn: () => getNeedleValvesHB(clean(filters) as NeedleValveHBFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })

export const useNeedleValveHPFilterOptions = () =>
  useQuery({
    queryKey: ['nv-hp-filters'],
    queryFn: getNeedleValveHPFilterOptions,
    staleTime: Infinity,
  })

export const useNeedleValvesHP = (filters: NeedleValveHPFilterParams) =>
  useQuery({
    queryKey: ['nv-hp', clean(filters)],
    queryFn: () => getNeedleValvesHP(clean(filters) as NeedleValveHPFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })
  import {
  getNeedleValvesSB, getNeedleValveSBFilterOptions,
  getMiniValves, getMiniValveFilterOptions,
  type NeedleValveSBFilterParams,
  type MiniValveFilterParams,
} from "../../../../api/needleValveApi"

export const useNeedleValveSBFilterOptions = () =>
  useQuery({
    queryKey: ['nv-sb-filters'],
    queryFn: getNeedleValveSBFilterOptions,
    staleTime: Infinity,
  })

export const useNeedleValvesSB = (filters: NeedleValveSBFilterParams) =>
  useQuery({
    queryKey: ['nv-sb', clean(filters)],
    queryFn: () => getNeedleValvesSB(clean(filters) as NeedleValveSBFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })

export const useMiniValveFilterOptions = () =>
  useQuery({
    queryKey: ['nv-mini-filters'],
    queryFn: getMiniValveFilterOptions,
    staleTime: Infinity,
  })

export const useMiniValves = (filters: MiniValveFilterParams) =>
  useQuery({
    queryKey: ['nv-mini', clean(filters)],
    queryFn: () => getMiniValves(clean(filters) as MiniValveFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
  })