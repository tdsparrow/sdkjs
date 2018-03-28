/*
 * (c) Copyright Ascensio System SIA 2010-2018
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia,
 * EU, LV-1021.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

var g_sEmpty_bin = "DOCY;v4;8985;BQCAAgAACYYCAAAFvAIAAAbYDwAABzMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAADIAAAAAJAAAAAABAAEBAQIBAgMBAwQBBAUBBQYBCgcBCwgBCAkBCQoBBgsBBwEEAAAAQQ4TABgNAAAAGwAAAAkGFQAAAAoFOMEBAAsBAQwFAAAAAA0FCWIFAAFMAAAABAYKAAAAQQByAGkAYQBsAAUGCgAAAEEAcgBpAGEAbAAGBgoAAABBAHIAaQBhAGwABwYKAAAAQQByAGkAYQBsAAgEFgAAABYEFgAAAAKiDAAAACoAAAABAgAAAGEAAgwAAABOAG8AcgBtAGEAbAAJAQAAAAMIAQAAAAEKAQAAAAEAugAAAAECAAAAMQACEgAAAGgAZQBhAGQAaQBuAGcA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";