import { DefaultError, QueryKey, QueryObserverOptions, OmitKeyof, SkipToken, InfiniteQueryObserverOptions, QueryObserverResult, DefinedQueryObserverResult, InfiniteQueryObserverResult, DefinedInfiniteQueryObserverResult, MutationObserverOptions, MutateFunction, Override, MutationObserverResult } from '@tanstack/query-core';

interface UseBaseQueryOptions<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> {
}
interface UseQueryOptions<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends OmitKeyof<UseBaseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'suspense'> {
}
interface UseSuspenseQueryOptions<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends OmitKeyof<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryFn' | 'enabled' | 'throwOnError' | 'placeholderData'> {
    queryFn?: Exclude<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>['queryFn'], SkipToken>;
}
interface UseInfiniteQueryOptions<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey, TPageParam = unknown> extends OmitKeyof<InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey, TPageParam>, 'suspense'> {
}
interface UseSuspenseInfiniteQueryOptions<TQueryFnData = unknown, TError = DefaultError, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey, TPageParam = unknown> extends OmitKeyof<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey, TPageParam>, 'queryFn' | 'enabled' | 'throwOnError' | 'placeholderData'> {
    queryFn?: Exclude<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey, TPageParam>['queryFn'], SkipToken>;
}
type UseBaseQueryResult<TData = unknown, TError = DefaultError> = QueryObserverResult<TData, TError>;
type UseQueryResult<TData = unknown, TError = DefaultError> = UseBaseQueryResult<TData, TError>;
type UseSuspenseQueryResult<TData = unknown, TError = DefaultError> = OmitKeyof<DefinedQueryObserverResult<TData, TError>, 'isPlaceholderData' | 'promise'>;
type DefinedUseQueryResult<TData = unknown, TError = DefaultError> = DefinedQueryObserverResult<TData, TError>;
type UseInfiniteQueryResult<TData = unknown, TError = DefaultError> = InfiniteQueryObserverResult<TData, TError>;
type DefinedUseInfiniteQueryResult<TData = unknown, TError = DefaultError> = DefinedInfiniteQueryObserverResult<TData, TError>;
type UseSuspenseInfiniteQueryResult<TData = unknown, TError = DefaultError> = OmitKeyof<DefinedInfiniteQueryObserverResult<TData, TError>, 'isPlaceholderData' | 'promise'>;
interface UseMutationOptions<TData = unknown, TError = DefaultError, TVariables = void, TContext = unknown> extends OmitKeyof<MutationObserverOptions<TData, TError, TVariables, TContext>, '_defaulted'> {
}
type UseMutateFunction<TData = unknown, TError = DefaultError, TVariables = void, TContext = unknown> = (...args: Parameters<MutateFunction<TData, TError, TVariables, TContext>>) => void;
type UseMutateAsyncFunction<TData = unknown, TError = DefaultError, TVariables = void, TContext = unknown> = MutateFunction<TData, TError, TVariables, TContext>;
type UseBaseMutationResult<TData = unknown, TError = DefaultError, TVariables = unknown, TContext = unknown> = Override<MutationObserverResult<TData, TError, TVariables, TContext>, {
    mutate: UseMutateFunction<TData, TError, TVariables, TContext>;
}> & {
    mutateAsync: UseMutateAsyncFunction<TData, TError, TVariables, TContext>;
};
type UseMutationResult<TData = unknown, TError = DefaultError, TVariables = unknown, TContext = unknown> = UseBaseMutationResult<TData, TError, TVariables, TContext>;

export type { DefinedUseInfiniteQueryResult, DefinedUseQueryResult, UseBaseMutationResult, UseBaseQueryOptions, UseBaseQueryResult, UseInfiniteQueryOptions, UseInfiniteQueryResult, UseMutateAsyncFunction, UseMutateFunction, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult, UseSuspenseInfiniteQueryOptions, UseSuspenseInfiniteQueryResult, UseSuspenseQueryOptions, UseSuspenseQueryResult };
