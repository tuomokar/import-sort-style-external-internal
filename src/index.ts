import {IStyleAPI, IStyleItem} from "import-sort-style"

export default (styleApi: IStyleAPI): Array<IStyleItem> => {

    const {
        and,
        hasDefaultMember,
        hasNamedMembers,
        hasNamespaceMember,
        hasNoMember,
        hasOnlyDefaultMember,
        hasOnlyNamedMembers,
        hasOnlyNamespaceMember,
        isAbsoluteModule,
        isRelativeModule,
        member,
        name,
        not,
        startsWithAlphanumeric,
        startsWithLowerCase,
        startsWithUpperCase,
        unicode,
    } = styleApi

    return [
        // import {Foo, bar, …} from "./baz"
        // import {foo, bar, …} from "./baz"
        {
            match: and(
              hasOnlyNamedMembers,
              isRelativeModule
            ),
            sort: member(unicode),
            sortNamedMembers: name(unicode),
        }
    ];
}
