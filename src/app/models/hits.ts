export interface Hits {
    hits:             Hit[];
    nbHits:           number;
    page:             number;
    nbPages:          number;
    hitsPerPage:      number;
    exhaustiveNbHits: boolean;
    query:            string;
    params:           string;
    processingTimeMS: number;
}

export interface Hit {
    created_at:       string;
    title:            string;
    url:              string;
    author:           string;
    points:           number;
    story_text:       null;
    comment_text:     null;
    num_comments:     number;
    story_id:         null;
    story_title:      null;
    story_url:        null;
    parent_id:        null;
    created_at_i:     number;
    _tags:            string[];
    objectID:         string;
    _highlightResult: HighlightResult;
}

export interface HighlightResult {
    title:  Author;
    url:    Author;
    author: Author;
}

export interface Author {
    value:        string;
    matchLevel:   MatchLevel;
    matchedWords: any[];
}

export enum MatchLevel {
    None = "none",
}
